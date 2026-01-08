<!-- <template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="flex mx-auto bg-white rounded py-10">
      <div class="w-[330px] box-border text-center pt-10">
        <div class="text-[#444444] font-bold">获取教程</div>
        <div class="text-sm pt-2 pb-6">微信扫码关注公众号</div>
        <div
          class="border border-gray rounded w-[50%] mx-auto overflow-hidden inline-block"
        >
          <img class="w-full" src="../../assets/login/gzh_code.jpg" alt="" />
        </div>
        <div class="pt-4 font-bold text-sm">
          点击菜单[实战项目]获取本系列教程
        </div>
      </div>
      <div
        class="w-[400px] pl-10 pr-10 pb-3 border-box border-l border-l-2 border-gray"
      >
        <div class="font-bold mb-3">密码登录</div>
        <el-form :model="formLogin" :rules="loginRules">
          <el-form-item prop="username">
            <el-input
              class="h-[40px]"
              placeholder="请输入用户名"
              v-model="formLogin.username"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              class="h-[40px]"
              v-model="formLogin.password"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-checkbox v-model="isRemember" label="记住密码" size="large" />
          <el-button
            type="primary"
            class="w-full mt-5 !h-[40px]"
            @click="handleLogin"
            >登录</el-button
          >
        </el-form>
        <div class="flex items-center justify-between mt-4">
          <div class="w-[100px] border-t-2 border-gray"></div>
          <div class="text-[#999] text-[14px]">其它方式登录</div>
          <div class="w-[100px] border-t-2 border-gray"></div>
        </div>
        <div class="flex justify-around mt-4">
          <div class="bg-[#f5f5f5] rounded-full p-2">
            <wxIcon />
          </div>
          <div class="bg-[#f5f5f5] rounded-full p-2">
            <qqIcon />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import wxIcon from "@/assets/svg/wx_icon.vue";
import qqIcon from "@/assets/svg/qq_icon.vue";
import { reactive, ref, onMounted } from "vue";
import { login } from "@/api/login/request";
import type { LoginVo } from "@/api/login/types/login.vo";
import { Storage } from "@/utils/storage";
import { useRouter } from "vue-router";
const router = useRouter();
const formLogin = reactive<LoginVo>({ username: "", password: "" });
const loginRules = reactive({
  username: [{ required: true, message: "用户名不可为空", trigger: "blur" }],
  password: [{ required: true, message: "密码不可为空", trigger: "blur" }],
});
//登录
const handleLogin = async () => {
  const { data } = await login(formLogin);
  Storage.set<string>("token", data);
  router.push("/");
  if (isRemember.value) {
    rememberPassword(formLogin);
    return;
  }
  Storage.remove("userAccount");
};
/**
 * 记住密码
 * @param account 账户密码
 */
const rememberPassword = (account: LoginVo) => {
  Storage.set<LoginVo>("userAccount", account);
};
const isRemember = ref(false);
//获取记住的账户密码
const getRememberAccount = () => {
  const userAccount: LoginVo | null = Storage.get("userAccount");
  if (!userAccount) return;
  formLogin.username = userAccount.username;
  formLogin.password = userAccount.password;
  isRemember.value = true;
};
onMounted(() => {
  getRememberAccount();
  if (Storage.get("token")) router.push("/");
});
</script>
 -->

<template>
  <div
    class="flex items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-blue-200"
  >
    <div class="flex mx-auto bg-white rounded py-10">
      <div class="w-[330px] box-border text-center pt-10">
        <div class="text-[#444444] font-bold">打开微信App</div>
        <div class="text-sm pt-2 pb-6">右上角扫一扫</div>
        <div
          class="border border-gray rounded w-[50%] mx-auto overflow-hidden inline-block"
        >
          <img class="w-full" src="../../assets/login/zhf_code.jpg" alt="" />
        </div>
        <div class="pt-4 font-bold text-sm">扫码登录</div>
      </div>
      <div
        class="w-[400px] pl-10 pr-10 pb-3 border-box border-l border-l-2 border-gray"
      >
        <div class="font-bold mb-3">密码登录</div>
        <el-form :model="formLogin" :rules="loginRules">
          <el-form-item prop="username">
            <el-input
              size="large"
              placeholder="请输入用户名"
              v-model="formLogin.username"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              size="large"
              v-model="formLogin.password"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item prop="code">
            <el-input
              v-model="formLogin.captcha"
              size="large"
              auto-complete="off"
              placeholder="验证码"
              class="w-[60%] mr-4"
            >
            </el-input>
            <div @click="handleGetCaptcha" v-html="codeUrl"></div>
          </el-form-item>
          <el-checkbox v-model="isRemember" label="记住密码" size="large" />
          <el-button
            type="primary"
            class="w-full mt-5 !h-[40px]"
            @click="handleLogin"
            >登录</el-button
          >
        </el-form>
        <div class="flex items-center justify-between mt-4">
          <div class="w-[100px] border-t-2 border-gray"></div>
          <div class="text-[#999] text-[14px]">其它方式登录</div>
          <div class="w-[100px] border-t-2 border-gray"></div>
        </div>
        <div class="flex justify-around mt-4">
          <div class="bg-[#f5f5f5] rounded-full p-2">
            <wxIcon />
          </div>
          <div class="bg-[#f5f5f5] rounded-full p-2">
            <qqIcon />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import wxIcon from '@/assets/svg/wx_icon.vue';
import qqIcon from '@/assets/svg/qq_icon.vue';
import { reactive, ref, onMounted } from 'vue';
import { login, getCaptcha } from '@/api/login/request';
import type { LoginVo } from '@/api/login/types/login.vo';
import { Storage } from '@/utils/storage';
import { useRouter } from 'vue-router';
import { nextTick } from 'vue';
const router = useRouter();
//登录表单
const formLogin = reactive<LoginVo>({
  username: '',
  password: '',
  id: '',
  captcha: '',
});
//登录规则
const loginRules = reactive({
  username: [{ required: true, message: '用户名不可为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不可为空', trigger: 'blur' }],
  captcha: [{ required: true, message: '验证码不可为空', trigger: 'blur' }],
});

//获取验证码

const codeUrl = ref<string>();
/* const handleGetCaptcha = async () => {
  try{
    const  {data}  = await getCaptcha();
    console.log('Captcha retrieved successfully:', data);
    codeUrl.value = data.img;
    formLogin.id = data.id;
    console.log('Captcha retrieved successfully:', data);
  } 
  catch (error) {
    console.error('Error getting captcha:', error);
    // 在这里处理错误，例如显示错误消息给用户
  }

}; */

const handleGetCaptcha = async () => {
  // 添加时间戳防止缓存
  const response = await getCaptcha();
  const { data } = response;
  console.log('Captcha retrieved successfully:', data);
  // 清空旧验证码
  codeUrl.value = '';
  formLogin.id = '';
  formLogin.captcha = '';
  
  // 设置新验证码
  await nextTick(); // 确保DOM更新
  codeUrl.value = data.img;
  formLogin.id = data.id;
  
  console.log('New captcha loaded:', data);
}

//登录，
const handleLogin = async () => {
   const { data } = await login(formLogin);
   console.log('Login successful:', data);
   Storage.set<string>("token", data);
   router.push("/");
  if (isRemember.value) {
    rememberPassword(formLogin);
    return;
  } else {
    Storage.remove('userAccount');
  }
};
/**
 * 记住密码
 * @param account 账户密码
 */
const rememberPassword = (account: LoginVo) => {
  Storage.set<LoginVo>('userAccount', account);
};
const isRemember = ref(false);

//获取记住的账户密码
const getRememberAccount = () => {
  const userAccount: LoginVo | null = Storage.get('userAccount');
  if (!userAccount) return;
  formLogin.username = userAccount.username;
  formLogin.password = userAccount.password;
  isRemember.value = true;
};
onMounted(() => {
  getRememberAccount();
  // 无论token是否存在都获取验证码
  handleGetCaptcha();
  
  // 如果token存在且有效，可以跳转首页
  // 这里可以添加token有效性验证逻辑
  // if (Storage.get('token')) {
  //   router.push('/');
  // }
});
</script>

<!-- 
1. 组件挂载时的操作
检查并应用记住的账户密码
使用 onMounted 生命周期钩子，在组件挂载后立即执行 getRememberAccount 函数。
getRememberAccount 函数从本地存储（Storage）中获取之前保存的用户登录信息（用户名和密码）。
如果找到了，则自动填充登录表单，并设置 isRemember 为 true 以反映用户之前选择的“记住密码”状态。
获取验证码
在组件挂载时，调用 handleGetCaptcha 函数异步获取验证码。
验证码图片的 URL 和 ID 被存储在响应式变量 codeUrl 和 formLogin.id 中，以便在页面上显示验证码。
2. 登录操作
处理登录表单提交
当用户提交登录表单时，调用 handleLogin 函数。
handleLogin 函数异步调用 login 函数（通常是发送请求到后端 API）。
接收后端返回的数据，假设其中包含认证用的 token。
存储 token 和用户信息
将 token 保存到本地存储（例如 localStorage 或 sessionStorage）中，以便后续请求携带认证信息。
检查用户是否选择了“记住密码”选项：
如果选中，则调用 rememberPassword 函数保存用户的登录信息（用户名和密码）到本地存储中。
如果未选中，则从本地存储中移除保存的用户登录信息。
3. 页面跳转
登录成功后，使用 router.push('/') 导航到应用的主页（'/' 路径）。
3. 记住密码功能
保存用户登录信息
rememberPassword 函数将用户的登录信息（account 对象，包含用户名和密码）保存到本地存储中，键为 'userAccount'。
4. 验证码功能
获取验证码
handleGetCaptcha 函数异步调用 getCaptcha 函数来从服务器获取验证码。
获取到的验证码数据被设置到相应的响应式变量中。
验证码图片通过 v-html 在页面上展示。 -->