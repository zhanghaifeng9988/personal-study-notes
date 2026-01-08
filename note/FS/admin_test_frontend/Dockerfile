# build stage
# 使用 Node.js 20 的轻量级镜像（基于 Debian Bookworm）。
FROM node:20-bookworm-slim as build-stage

# 设置工作目录为 /app，后续命令都在此目录执行。
WORKDIR /app

# 只复制 package.json 和 package-lock.json (如果有) 来利用 Docker 缓存
COPY package*.json ./

RUN npm config set registry https://registry.npmmirror.com/

# 安装依赖
RUN npm install

# 复制其他文件并构建
COPY . .

RUN npm run build

# production stage
#使用 Nginx 官方镜像（稳定版），作为生产环境运行环境。
FROM nginx:stable as production-stage

# 将构建结果（dist 目录）复制到 Nginx 的静态文件目录
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 如果有自定义的 Nginx 配置文件，确保路径正确
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]