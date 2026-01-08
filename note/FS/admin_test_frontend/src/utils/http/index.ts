//创建和配置axios实例，
//实现请求和响应的拦截,
//加载动画的显示与隐藏、
//请求的去重、错误处理等功能

import axios from 'axios';
import type {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { ElMessage, ElLoading } from 'element-plus';
import router from '@/router/index';
import { Storage } from '@/utils/storage';
import { saveAs } from "file-saver";

//发送请求时显示加载动画（loading），并在所有请求完成时关闭加载动画的逻辑。
const loadingInstance = ElLoading.service;
let requestCount = 0;
const showLoading = () => {
  requestCount++;
  if (requestCount === 1) loadingInstance();
};
const closeLoading = () => {
  requestCount--;
  if (requestCount === 0) loadingInstance().close();
};

//创建axios实例
//axios.create 是一个函数，它的返回值是一个 AxiosInstance 类型的对象。
//也就是说，axios.create 创建的对象符合 AxiosInstance 接口的定义。
const service: AxiosInstance = axios.create({
  method: 'get',
  baseURL: import.meta.env.VITE_APP_API,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },

  timeout: 10000,
});

//模块声明,用于扩展 axios 库的类型定义,为三个接口添加了自定义属性
//declare module 'axios' 用于声明 axios 模块的扩展。
//这允许我们在不修改 axios 源代码的情况下，扩展其类型定义。
// <D = any> 表示请求体数据类型，默认值为 any。
// <T = any> 表示响应数据类型，默认值为 any。
declare module 'axios' {
  interface AxiosRequestConfig<D = any> {
    loading?: boolean;
    isToken?: boolean;
  }
  interface InternalAxiosRequestConfig<D = any, T = any> {
    loading?: boolean;
    isToken?: boolean;
  }
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>;
  }
}
/*  service实例的类型定义接口，这个接口得到扩展，包含得属性如下：
interface AxiosRequestConfig {
  url: string; // 请求的 URL
  method?: string; // 请求方法，如 'get', 'post', 'put', 'delete' 等
  data?: any; // 请求体数据，通常用于 POST、PUT 请求
  params?: any; // URL 参数，通常用于 GET 请求
  headers?: any; // 请求头
  timeout?: number; // 请求超时时间
  loading?: boolean; // 是否显示加载动画
  isToken?: boolean; // 是否携带 token
  // 其他 axios 支持的配置项
} */

//配置axios请求拦截器
const requestMap = new Map(); //存储请求数据
service.interceptors.request.use(
  //用于在发送请求之前对请求配置进行修改或添加逻辑
  (config: InternalAxiosRequestConfig<any>) => {
    //请求成功拦截器
    const controller = new AbortController(); //用于终止一个或多个 Web 请求的对象
    const key = config.data + config.url; //请求的唯一标识符
    config.signal = controller.signal; //设置请求信号，用于终止请求
    if (requestMap.has(key)) {
      //检查请求是否已经存在，如果存在则终止该请求
      requestMap.get(key).abort(); //终止并删除已存在的请求
      requestMap.delete(key); //终止并删除已存在的请求
    } else {
      requestMap.set(key, controller); //存储新的请求
    }

    const { loading = true, isToken = true } = config; //解构配置属性

    if (loading) showLoading(); //显示加载状态
    if (Storage.get('token') && isToken) {
      //添加 Authorization 头
      config.headers['Authorization'] = 'Bearer ' + Storage.get('token'); // 让每个请求携带自定义token 请根据实际情况自行修改
    }

    return config;
  },
  (error) => {
    //请求失败拦截器,回调函数
    console.log(error);
  }
);

//配置axios响应拦截器
service.interceptors.response.use(
  //在接收到响应后对响应数据进行修改或添加逻辑。
  (res: AxiosResponse<any, any>) => {
    //响应成功拦截器,回调函数
    const { data, config } = res; //解构响应数据

    const { loading = true } = config; //解构配置属性,默认值true
    if (loading) closeLoading(); //如果加载完成，关闭加载状态

    if (data.code != 200) {
      //如果响应状态码不是200，则显示错误信息
      ElMessage({
        message: data.describe,
        type: 'error',
      });
      //如果响应状态码是401或400，则表示登录状态已过期，则清除token并重定向到登录页面
      if (data.code === 401 || data.code === 400) {
        //登录状态已过期.处理路由重定向
        Storage.remove('token');
        router.push('/');
      }
      // throw new Error(data.describe);
      return Error(data.describe);
    }
    return data; //如果 code 等于 200，则返回响应数据 data。
  },
  async (error) => {
    //当响应失败时会被调用,异步回调函数，
    closeLoading(); //关闭加载状态

    // 打印详细的 error.response.data 内容
    // 安全访问response属性
    if (typeof error === 'object' && error !== null && 'response' in error) {
      const response = (error as { response?: any }).response;
      if (response) {
        console.error('Error Response Data:', response.data);
        console.error('Error Status Code:', response.status);
        console.error('Error Headers:', response.headers);
      }
    }

    // 添加类型保护
    let message = '';
    if (typeof error === 'object' && error !== null && 'message' in error) {
      message = (error as { message: string }).message;
    }
    
    console.log('进入API错误处理流程');
    if (message == 'Network Error') {
      //处理特定错误消息
      message = '后端接口连接异常';
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时';
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.substr(message.length - 3) + '异常';
    }
    ElMessage({
      //显示错误消息
      message: message,
      type: 'error',
    });
    try {
      console.log('尝试路由跳转到登录页');
      await router.push('/login');
    } catch (e) {
      console.error('路由跳转失败:', e);
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default service;


//下载
//downLoad 的异步函数，用于从指定的 URL 下载文件并保存到本地。
//定义了一个常量 res，用于存储从服务器返回的响应数据。
//responseType: "blob": 指定响应的数据类型为二进制大对象（Blob），适用于下载文件。
export const downLoad = async (url: string, params: any, filename: string) => {
  try {
    // 创建独立的axios实例，避免拦截器影响
    const instance = axios.create({
      baseURL: import.meta.env.VITE_APP_API,
      responseType: 'blob',
      headers: {
        'Authorization': 'Bearer ' + Storage.get('token')
      }
    });

    const response = await instance.get(url, { params });
    
    // 验证响应数据
    if (!response.data || !(response.data instanceof Blob)) {
      throw new Error('无效的文件数据格式');
    }

    // 获取正确的Content-Type
    const contentType = response.headers['content-type'] || 
                       'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

    // 创建Blob对象
    const blob = new Blob([response.data], { type: contentType });

    // 验证文件大小
    if (blob.size <= 0) {
      throw new Error('下载的文件内容为空');
    }

    // 使用文件保存库保存
    saveAs(blob, filename.endsWith('.xlsx') ? filename : `${filename}.xlsx`);
    
  } catch (error) {
    let errorMessage = '文件下载失败';
    if (error instanceof Error) {
      errorMessage += `: ${error.message}`;
    }
    console.error('文件下载失败:', {
      error,
      url,
      params
    });
    
    ElMessage({
      message: errorMessage,
      type: 'error',
      duration: 5000
    });
    
    throw error;
  }
};

