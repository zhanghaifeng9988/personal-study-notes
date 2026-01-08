
                                         ---安装docker---
#安装 yum -utils 和 yum-config-manage
yum -y install yum-utils yum-config-manager   

#添加一个名为 docker-ce 的 YUM 仓库
yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

#安装Docker Engine和容器
yum -y install docker-ce docker-ce-cli containerd.io

#启动docker守护进程
systemctl start docker
#设置开机自启动
systemctl enable docker

#修改docker engine的默认Registry  按照仓库的需要修改，以下为举例：
 >/etc/docker/daemon.json <<-'EOF'{"registry-mirrors": ["https://tuv7rqqq.mirror.aliyuncs.com"]}EOF

# 重启docker
systemctl daemon-reload
systemctl restart docker

#docker运行状态查看
systemctl status docker

##修改容器是否随 " systemctl start docker "服务启动
首先停止容器，不然无法修改配置文件
配置文件路径为：/var/lib/docker/containers/容器ID
在该目录下找到一个文件 hostconfig.json ，找到该文件中关键字 RestartPolicy
修改前配置："RestartPolicy":{"Name":"no","MaximumRetryCount":0}
修改后配置："RestartPolicy":{"Name":"always","MaximumRetryCount":0}

# 清理 Docker 系统中的无用资源，

docker system prune -f
**注意**：**该命令会删除所有停止的容器、未被任何容器引用的悬空镜像、未被使用的网络、构建缓存等。**
包括：
已停止的容器（stopped containers）
未被任何容器引用的悬空镜像（dangling images）
未被使用的网络（unused networks）
构建缓存（build cache）等。

# 清理 Docker 构建缓存
docker builder prune -a

# 安装docker-compose
**使用 Docker Compose 可以更高效地管理多容器应用，通过一个 YAML 文件（docker-compose.yml）定义镜像拉取、容器配置、网络、数据卷等，然后通过一条命令完成所有操作（拉取镜像、创建并启动容器）。**


mkdir  /soft
curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /soft/docker-compose  
sudo chmod +x /soft/docker-compose


#将文件复制到/usr/local/bin环境变量下面
mv docker-compose /usr/local/bin
#给他一个执行权限
chmod +x /usr/local/bin/docker-compose
#配置环境变量
vi  /etc/profile中的PATH项，添加docker-compose文件的所在路径，记得source

#卸载docker-compose
rm  /soft/docker-compose

#查看版本信息
docker-compose --version


#配置docker-compose
  #针对  ANTSK的配置 
  点击 github上的docker-compose.yml  读取以下内容：

  # 非 host 版本, 不使用本机代理
  version: '3.8'
  services:
    antskpg:#服务名
      image: registry.cn-hangzhou.aliyuncsxuzeyu91/pg:v0.5.0 #镜像
      container_name: antskpg
      restart: always
      ports: # 生产环境建议不要暴露
        - 5432:5432
      networks:
        - antsk
      environment:
        # 这里的配置只有首次运行生效。修改后，重会生效的。需要把持久化数据删除再重启，才有效果
        - POSTGRES_USER=username
        - POSTGRES_PASSWORD=password
        - POSTGRES_DB=antsk
      volumes:
        - ./pg/data:/var/lib/postgresql/data
    antsk:
      container_name: antsk
      image: registry.cn-hangzhou.aliyuncsxuzeyu91/antsk:v0.2.7
      # 如果需要pytorch环境需要使用下面这个镜像大
      # image: registry.cn-hangzhou.aliyuncsxuzeyu91/antsk:p0.2.7
      ports:
        - 5000:5000
      networks:
        - antsk
      depends_on:
        - antskpg
      restart: always
      environment:
        - ASPNETCORE_URLS=http://*:5000
      volumes:
        - ./appsettings.json:/app/appsettings.jso地配置文件 需要放在同级目录
  networks:
    antsk:

# 启动docker-compose
   docker-compose -f docker-compose.yml up -d



--docker-compose.yml文件配置常用字段及说明
字段               说明
version           version 字段指定了 Docker Compose 编排文件的版本	 
services          指定了在 Docker Compose 编排中要运行的服务。每个服务都有一个名称，并指定要使用的镜像和容器的配置选项                          
build	          指定Dockerfile文件名（要指定的Dockerfile文件需要在build标签的子级标签中用dockefile标签指定）
dockerfile	      构建镜像上下文路径
context	          可以是dockerfile路径，或者时执行git仓库的url地址
images	          指定镜像（已存在）
command	          执行命令，会覆盖容器启动后默认执行的命令（会覆盖dockefile中的CMD指令）
container_name	  指定容器名称，由于容器名称是唯一的，如果指定自定义名称，则无法scale指定容器数量。
deploy	          指定部署和运行服务相关配置，只能在swarm模式使用
environment	      添加环境变量
networks	      加入网络，引用顶级networks下条目
network-mode	  设置容器的网络模式
ports	          暴露容器端口，与-p相同，但是端口不能低于60
volumes	          挂载一个宿主机目录或命令卷到容器，命令卷要在顶级volumes定义卷名称
volumes_from	  从另一个服务或容器挂载卷，可选参数：ro和rw（仅版本‘2’支持）
hostname	      在容器内设置内核参数
links	          连接诶到另一个容器，- 服务名称[ : ]
privileged	      用来给容器root权限，注意是不安全的，true
restart	          重启策略，定义是否重启容器1、no，默认策略，在容器退出时不重启容器2、on-failure，在容器非正常退出时（退出状态非0），才会重启容器3、on-failure：3 在容器非正常退出时，重启容器，最多重启3次4、always，在容器退出时总是重启容器，5、unless-stopped，在容器退出时总是重启容器，但是不考虑在Docker守护进程启动时就已经停止了的容器。
depends_on	      此标签用于解决容器的依赖，启动先后问题。如启动应用容器，需要先启动数据库容器。php:depends_on:- apache- mysql


## Docker-compose常用命令

docker --version #查看版本
 
docker-compose -h    # 查看帮助
 
docker-compose up    # 启动所有docker-compose服务
 
docker-compose up -d    # 启动所有docker-compose服务并后台运行
 
docker-compose down     # 停止并删除容器、网络、卷、镜像。
 
docker-compose exec  yml里面的服务id   # 进入容器实例内部  docker-compose exec docker-compose.yml文件中写的服务id /bin/bash
 
docker-compose ps      # 展示当前docker-compose编排过的运行的所有容器
 
docker-compose top       # 展示当前docker-compose编排过的容器进程
 
docker-compose logs  yml里面的服务id   # 查看容器输出日志
 
docker-compose config     # 检查配置
 
docker-compose config -q  # 检查配置，有问题才有输出
 
docker-compose restart  容器name # 重启服务，不加容器name，所有容器都将重启
 
docker-compose start  容器name   # 启动服务 ，不加容器name，所有容器都将启动
 
docker-compose stop   容器name   # 停止服务，不加容器name，所有容器都将停止

 docker-compose --status  #状态查询

                                        



                                         容器和镜像的删除
										 
#删除所有未使用的镜像、容器、网络和卷。这可以帮助您回收磁盘空间。										 
docker system prune -a


#用于清理由 docker-compose 命令创建的所有资源，以便你可以从一个干净的状态重新开始。
docker-compose down

  停止容器：首先，它会停止所有正在运行的容器。
  删除容器：接着，它会删除这些已经停止的容器。
  删除默认网络：除了容器，它还会删除由 docker-compose 命令默认创建的网络（除非使用 --network 标志指定了自定义网络）。

#删除由 docker-compose.yml 文件中定义的所有卷（除非使用 --volumes 或 -v 标志明确指定）。
这对于完全重置项目的运行环境非常有用，因为它确保了所有在容器中产生的数据（除非保存在外部卷或宿主机上）都会被删除。  
  
  docker-compose down -v
  
  
#手动删除docker容器
  docker rm 78cfd23bbc55
  
  停止容器 ，删除容器，如果容器使用了外部卷（volumes）或挂载了宿主机的目录，这些资源不会被自动删除。
  你需要手动管理这些外部存储。
  **注意：不会删除与容器关联的镜像
  
  
  
  


                                     网络相关命令
	
	
	#显示网络列表
docker network ls

NETWORK ID     NAME         DRIVER    SCOPE
99011ca86481   bridge       bridge    local
fe97024edc8f   host         host      local
b721db3fb1bf   none         null      local
2ea6f0ff2d05   soft_antsk   bridge    local


 #查看桥接网络的详细信息
 
docker network inspect bridge

docker network inspect soft_antsk

#查看桥接网路的IP子网信息
docker network inspect --format='{{.IPAM.Config}}' bridge 


#端口映射查询
iptables -t nat -nvL


***注意：Docker0的默认IP是172.17.0.0/24这个网段开始，使用这个IP可能会和公司内网络冲突，造成网络故障。
会造成没办法ssh到服务器。

#创建一个自定义网络  ots为创建的自定义网络的name
docker network create  ots  --subnet 172.18.0.0/16   --gateway  172.18.0.1

#自定义网络可以自定义ip，默认网络bridge是不能指定IP的，jdk7:v1.0 是镜像的名称及标签
这个示例，是在创建容器的时候指定IP

docker run -it --name net01 --net ots --ip 172.18.0.3 jdk7:v1.0


##举例：手动创建一个自定义的网络
docker network create --driver bridge --subnet 172.30.0.0/24 --gateway 172.30.0.1   antsk

                                    
									docker的守护进程

#手动启动守护进程
dockerd

#守护进程事件信息
docker  events

