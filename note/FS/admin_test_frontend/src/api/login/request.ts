import request from '@/utils/http/index';
import type { LoginVo } from './types/login.vo';
export const login = (data: LoginVo) => {
  return request({
    url: '/user/login',
    data,
    isToken: false,
    method: 'post',
  });
};

//获取验证码
export const getCaptcha = () => {
  return request({
    url: '/user/captcha',
    isToken: false,
    method: 'get',
  })
  .then(response => {
    console.log('Captcha response:', response);
    return response; // 返回整个响应对象
  }).catch(error => {
    console.error('Error getting captcha:', error);
    throw error; // 重新抛出错误，以便调用者可以捕获
  });
};


//退出登录
export const logout = () => {
  return request({
    url: "/user/logout",
    method: "post",
  });
};