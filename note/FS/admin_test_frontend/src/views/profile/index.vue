<template>
  <el-row class="fs_profile" :gutter="20">
    <el-col :span="8">
      <el-card>
        <template #header>
          <div class="card-header">
            <span>我的信息</span>
          </div>
        </template>
        <el-upload
          class="avatar-uploader"
          :action="uploadParams.uploadUrl"
          :headers="uploadParams.headers"
          :on-success="handleAvatarSuccess"
          :on-error="handleUploadError"
          :before-upload="beforeUpload"
          :auto-upload="true"
          :show-file-list="false"
        >
          <img
            v-if="proFileData.avatar"
            :src="proFileData.avatar"
            @error="handleImageError"
            class="avatar"
          />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
        <ul>
          <li class="profile">
            <div class="profile_label">
              <User class="profile_label_icon" />
              <div class="profile_label_text">用户名</div>
            </div>
            <div>{{ proFileData.username }}</div>
          </li>
          <li class="profile">
            <div class="profile_label">
              <Avatar class="profile_label_icon" />
              <div class="profile_label_text">昵称</div>
            </div>
            <div>{{ proFileData.nickname }}</div>
          </li>
          <li class="profile">
            <div class="profile_label">
              <Iphone class="profile_label_icon" />
              <div class="profile_label_text">手机号</div>
            </div>
            <div>{{ proFileData.telephone }}</div>
          </li>
          <li class="profile">
            <div class="profile_label">
              <Message class="profile_label_icon" />
              <div class="profile_label_text">邮箱</div>
            </div>
            <div>{{ proFileData.email }}</div>
          </li>
          <li class="profile">
            <div class="profile_label">
              <Calendar class="profile_label_icon" />
              <div class="profile_label_text">创建时间</div>
            </div>
            <div>{{ proFileData.create_time }}</div>
          </li>
        </ul>
      </el-card>
    </el-col>
    <el-col :span="16">
      <el-card>
        <template v-slot:header>
          <div>
            <span>个人资料</span>
          </div>
        </template>
        <el-tabs v-model="activeName">
          <el-tab-pane label="基本资料" name="userinfo">
            <userInfo :user="proFileData" @submit="updateUser" />
          </el-tab-pane>
          <el-tab-pane label="修改密码" name="resetPwd">
            <resetPassWord @submit="resetPwd" />
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import './index.scss';
import { ref, onMounted } from 'vue';
const activeName = ref<string>('userinfo');
import { ElMessage } from 'element-plus';
import { getProfile } from '@/api/user/index';
import { Storage } from '@/utils/storage';
import { updateUserInfo, updatePassword } from '@/api/user/index';
import userInfo from './components/userInfo.vue';
import resetPassWord from './components/resetPassWord.vue';
import type { ResetForm, UserInfo } from './types';

onMounted(() => {
  getProFileData();
});


const proFileData = ref<Partial<UserInfo>>({});
const getProFileData = async () => {
  const { data } = await getProfile();
  console.log('后端返回的数据:', data); // 检查 avatar 字段
  proFileData.value = data;
};
const updateUser = async (data: Partial<UserInfo>) => {
  await updateUserInfo(data);
  ElMessage.success('修改成功');
  getProFileData();
};

const resetPwd = async (data: ResetForm) => {
  await updatePassword(data);
  ElMessage.success('修改成功');
  getProFileData();
};

// 上传头像相关参数
const uploadParams = {
  uploadUrl: import.meta.env.VITE_APP_API + '/user/uploadAvatar',
  headers: { authorization: 'Bearer ' + Storage.get('token') },
};

//上传成功回调
const beforeUpload = (file: any) => {
  console.log('准备上传文件:', file);
  console.log('完整上传URL:', uploadParams.uploadUrl);
  console.log('环境变量VITE_APP_API:', import.meta.env.VITE_APP_API);
  return true;
};

const handleAvatarSuccess = (res: any) => {
  if (res.code == 200) {
    ElMessage.success('头像设置成功');
    // 强制更新avatar并添加时间戳避免缓存
    proFileData.value.avatar = res.data.avatar + '?t=' + Date.now();
    // 手动触发视图更新
    getProFileData();
  } else {
    ElMessage.error(res.describe);
  }
};

// 图片加载失败处理
const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement;
  img.style.display = 'none';
  ElMessage.error('头像加载失败，请检查图片URL');
};

const handleUploadError = (err: any) => {
  console.error('上传错误:', err);
  ElMessage.error('上传失败');
};
</script>
