
--启动docker
systemctl start docker.service

--基本概念
docker一词的原意为“码头的装卸工”，Docker 是一个基于 Golang 语言开发的开源的应用容器引擎，
可以让开发者打包应用及其依赖到一个轻量级、可移植的容器中，
然后发布到任何流行的 Linux 服务器。使用容器部署应用程序称为容器化。
主要解决“在我的机器上正常运行、但到你的机器上不正常运行”的问题。

Docker并非是一个通用的容器工具，它依赖于已存在并运行的Linux内核环境。
Docker基于客户端-服务器架构

Docker 容器 在概念上与虚拟机非常类似，但是它不会去模拟底层的硬件 ，
只会为每一个应用提供完全隔离的运行环境，这些“环境”就是Docker中的Container(容器)。

--相同：
虚拟机和容器都可以模拟完全相同的本地开发环境。

--区别：
虚拟机：虚拟出硬件后，在其上运行一个完整操作系统，再在该系统上运行所需应用进程；
容器：应用进程直接运行于宿主的内核，容器内没有自己的内核，也不进行硬件虚拟；

--docker核心组件

Docker Engine 是 Docker 的核心组件，它是一个轻量级的、运行时环境，用于容器化应用程序。
Docker Engine 负责将应用程序及其依赖项打包到一个可移植的容器中，这个容器可以在任何支持 Docker 的系统上运行，
无论是物理服务器、虚拟机还是云环境。

Docker Engine 包括以下几个主要组件：

Docker Daemon (dockerd)：
这是 Docker 引擎的主要后台进程，负责构建、运行和分发容器。它监听 Docker 命令行接口（CLI）的请求，并执行相应的操作。

Docker CLI (docker)：
Docker CLI 是一个命令行工具，用于与 Docker Daemon 进行交互。它提供了一系列的命令，允许用户创建、启动、停止、删除容器，以及管理镜像和网络等。

Docker Images：
镜像是容器的基础。它们包含了运行应用程序所需的代码、运行时环境、库、环境变量和配置文件。

Docker Containers：
容器是镜像的运行实例。它们是轻量级的、可执行的软件包，包含了运行应用程序所需的所有内容。

Docker Hub：
Docker Hub 是 Docker 的官方镜像仓库，用户可以从中拉取（pull）或推送（push）镜像。它是一个云服务，允许开发者和系统管理员共享和存储 Docker 镜像。

Docker Compose：
Docker Compose 是一个用于定义和运行多容器 Docker 应用程序的工具。通过使用 YAML 文件来配置应用程序的服务，用户可以轻松地启动和停止多个容器。

Docker Swarm：
Docker Swarm 是 Docker 的集群管理工具，允许用户将多个 Docker 主机转换为一个虚拟主机，以便运行和管理容器化应用程序。

安装 Docker Engine 后，用户可以利用这些组件来容器化应用程序，实现快速部署、无缝扩展和简化管理。
Docker Engine 支持多种操作系统，包括 Linux、macOS 和 Windows，使得跨平台容器化成为可能。



--构成：
Docker中的三个重要构成：Image(镜像)，Container(容器)，Repository(仓储)。
Image相当于OOP中的类，Container相对于类实例，Repository是存放位置。

--image：是一个只读模板，带有创建Docker容器的说明。
  通常一个镜像是基于另一个镜像，并进行一些额外的拓展自定义。
例如，用户可以构建一个基于ubuntu映像的映像，并安装Apache web服务器、
应用程序以及所需的配置信息。
  镜像是一个特殊的文件系统，除了提供容器运行时所需的程序、库、资源、配置等文件外，
还包含了一些为运行时准备的一些配置参数(如匿名卷、环境变量、用户等)。

--Container：镜像运行时的实例
类似运行起来的虚拟机，里面运行着用户的的应用程序。
通过一个镜像可以创建许多个互不影响的Container容器。
一个镜像就是一个可执行的包，其中包括运行应用程序所需要的代码、运行时、库、环境变量和配置文件等。


--Repository：集中存放镜像文件的地方
镜像构建完成后，可以在当前宿主上运行，但是如果需要在其它服务器上使用这个镜像，
就需要一个类似Git仓库那样的集中存储、分发镜像的服务，Docker Registry就是这样的服务。

一个Docker Registry中可以包含多个仓库，每个仓库可以包含多个Tag，每个Tag对应一个镜像。
镜像仓库是Docker用来集中存放镜像文件的地方，类似于之前常用的代码仓库。

通常一个仓库会包含同一个软件不同版本的镜像，而标签就常用于对应该软件的各个版本 。
可以通过<仓库名>:<标签>的格式来指定具体是这个软件哪个版本的镜像。
如果不给出标签，将以latest作为默认标签。
  --公共 Registry
公共 Registry，如 Docker Hub，是任何人都可以访问的。用户可以从 Docker Hub 拉取（pull）预构建的镜像来运行应用程序，
或者将自己的镜像推送（push）到 Docker Hub 与他人共享。Docker Hub 是 Docker 官方维护的公共 Registry。

  --私有 Registry
私有 Registry 是在特定组织或个人内部使用的 Registry。它可以托管在私有服务器或云服务上，并且可以配置访问控制，
以确保只有授权的用户才能访问或修改镜像。私有 Registry 对于需要保护知识产权或遵守特定安全策略的场景非常有用。

  --Registry 的工作原理
存储镜像：开发者在构建 Docker 镜像后，可以将它们推送到 Registry 上。
分发镜像：当需要在 Docker 主机上运行容器时，Docker Engine 可以从 Registry 拉取（pull）所需的镜像。
版本控制：Registry 允许对镜像进行标签（tagging），这使得用户可以轻松地管理不同版本的镜像。
认证和授权：私有 Registry 支持用户认证和访问控制，确保只有授权用户才能访问或修改镜像。
使用 Registry 的好处
可重复性：通过 Registry，用户可以在不同的环境和主机上重复使用相同的镜像。
协作：团队成员可以共享和协作开发应用程序，而无需担心环境不一致的问题。
安全性：私有 Registry 允许控制对镜像的访问，确保敏感数据不会泄露。
易于管理：Registry 提供了镜像的集中存储和管理，简化了部署和更新流程。
总之，Registry 在 Docker 生态系统中扮演着关键角色，它为镜像的存储、分发和版本管理提供了基础设施。无论是公共还是私有 Registry，都是确保 Docker 镜像可用性和安全性的重要组件。


--.Docker Compose概述
1.1 Docker Compose 定义
Docker Compose是Docker官方的开源项目，负责实现对Docker容器集群的快速编排。Compose 是 Docker 公司推出的一个工具软件，
可以管理多个 Docker 容器组成一个应用。
你需要定义一个 YAML 格式的配置文件docker-compose.yml，写好多个容器之间的调用关系。然后，只要一个命令，就能同时启动/关闭这些容器

1.2 Docker Compose产生背景
我们使用 Docker 的时候，定义 Dockerfile 文件，然后使用 docker build、docker run 等命令操作容器。
然而微服务架构的应用系统一般包含若干个微服务，每个微服务一般都会部署多个实例，如果每个微服务都要手动启停，那么效率之低，
维护量之大可想而知。

Compose 是用于定义和运行多容器 Docker 应用程序的工具。
通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。
.Docker Compose可以基于Compose文件帮我们快速的部署分布式应用，而无需手动一个个创建和运行容器,Compose文件是一个文本文件，
通过指令定义集群中的每个容器如何运行。

  --Docker Compose 核心概念
Docker Compose将所管理的容器分为三层， 分别是工程（project），服务（service）以及容器（containner）

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

--举例：
volumes:
  - ./appsettings.json:/app/appsettings.json
  这种挂载方式称为 绑定挂载（bind mount），它将宿主机上的文件或目录直接映射到容器内的文件系统中。
  这样做的好处是，你可以在宿主机上直接编辑文件，而这些更改会立即反映到容器中，这对于开发和调试非常有用。

volumes:
      - ./pg/data:/var/lib/postgresql/data
	这种挂载方式称为 绑定挂载（bind mount），它将宿主机上的目录直接映射到容器内的文件系统中。
这样做的好处是，你可以在宿主机上直接管理数据库文件，而这些文件的变化会立即反映到容器中，
这对于数据的持久化和备份非常有用。  






## --Dockerfile 
   是一个文本文件，它包含了一系列的指令和参数，用于定义 Docker 镜像的构建过程。
   每一条指令都会在镜像中创建一个新的层，并对镜像进行修改。
   Dockerfile 中的指令告诉 Docker 如何构建镜像，包括安装软件、复制文件、设置环境变量、配置网络等。
Dockerfile 的使用非常灵活，它是创建 Docker 镜像的基础。通过编写 Dockerfile，开发者可以确保应用程序在不同环境中的一致性，
因为 Docker 镜像包含了运行应用程序所需的所有依赖和配置。

  --以下是 Dockerfile 中一些常见指令的简要说明：

FROM：指定基础镜像，所有其他指令都在这个镜像上执行。
RUN：执行命令来安装软件或修改文件。
CMD：设置容器启动时默认执行的命令。
COPY 或 ADD：将本地文件复制到镜像中。
ENV：设置环境变量。
EXPOSE：声明容器监听的端口。
ENTRYPOINT：指定容器启动时执行的命令。
VOLUME：创建一个数据卷，用于持久化或共享数据。
WORKDIR：设置工作目录，即容器内部的工作路径。
USER：指定运行容器进程的用户身份。
ARG：定义构建参数，可以在构建镜像时传递给 Dockerfile。
Dockerfile 使得镜像的构建过程透明化、可复制，并且易于版本控制。开发者可以将自己的应用程序和配置放入 Dockerfile 中，
然后通过 Docker 命令行工具构建出镜像。其他开发者或运维人员可以利用这个镜像在任何 Docker 环境中快速部署应用程序，
确保了环境的一致性和可移植性。  

--Dockerfile 指令详解
删除构建的中间层镜像
 docker builder prune -a

### 构建镜像的命令1：使用缓存的中间镜像层。
docker build -t fs-admin-app .

### 构建镜像的命令2:构建镜像的每一步都重新执行命令，而不是使用之前缓存的中间镜像层。
docker build --no-cache --progress=plain -t fs-admin-app .



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
 
docker-compose restart   # 重启服务
 
docker-compose start     # 启动服务
 
docker-compose stop      # 停止服务



--常用命令
docker images      # 镜像列表
docker search xxx  # 检索镜像, 从镜像仓库中检索
docker pull xxx    # 下载镜像
docker rmi xxx     # 删除镜像


--基本操作
docker ps -a                       # 查看容器列表， 列出所有的容器
docker exec -it <容器ID或名称> <要执行的命令>  # 进入容器,执行相关操作
举例：docker exec -it dataease ls
docker exec -it mysql  /bin/bash

#  xxx可以是容器名，也可以是容器id
docker start   xxx                 # 打开容器
docker stop    xxx                 # 关闭容器
docker restart xxx                 # 重启
docker rm      xxx                 # 删除


--容器创建（从仓库下载镜像后进行容器创建）
docker run
         -i              # 打开 STDIN，用于控制台交互
         -t              # 支持终端登录
         -d              # 要求容器后台运行，默认前台 前三个标签可连写为itd
         -v              # 挂载数据卷
         --name=dc_nm    # 指定容器名
         -p 8080:80      # 暴露容器端口 80，并与宿主机端口 8080 绑定  
         centos:latest   # 镜像名:版本

--检查docker是否启动
systemctl status docker.service


                                          docker网络配置和管理
										  
--在单个宿主机上运行的Docker容器可以使用以下几种网络模式进行通信：

bridge网络：docker容器的默认网络模式。当容器使用桥接网络时，Docker会在宿主机上创建一个私有的内部网络。
Host网络：在这种模式下，容器共享宿主机的网络命名空间，直接使用宿主机的网络接口，而不是虚拟网络。
None网络：在此模式下，容器具有自己的网络命名空间，但不会附加到任何网络，无法与其他容器或外部网络通信。
适用于需要完全隔离网络的情况。

--多主机docker网络：

在多主机环境中，Docker容器跨不同宿主机进行通信需要更复杂的网络配置。Docker提供了以下机制：

overlay网络：Overlay网络需要Docker Swarm或类似的编排工具来管理多个宿主机上的容器。

docker swarm模式：Docker Swarm本身提供了跨多主机部署的管理和编排功能。

--docker网络驱动

Bridge（桥接）驱动：
这是 Docker 默认使用的网络驱动。它会创建一个 Docker 守护进程管理的本地网络桥接接口，容器可以连接到这个桥接接口上，也可以通过端口映射暴露服务。

Host（主机）驱动：
使用 Host 驱动，容器将使用主机的网络栈，即容器将与主机共享网络命名空间。这意味着容器可以直接访问主机上的网络设备和端口，但也可能导致端口冲突和网络隔离性问题。

Overlay（覆盖）驱动：
Overlay 驱动允许在多个 Docker 守护进程之间创建跨主机的网络。这对于在容器之间提供网络互联是很有用的，特别是在使用 Docker Swarm 或 Kubernetes 进行容器编排时。

Macvlan（MAC虚拟化）驱动：
Macvlan 驱动允许将容器直接连接到物理网络中，每个容器都会获得一个物理网络接口的虚拟 MAC 地址。这种方式可使容器直接获得网络的性能和功能，但也可能导致网络配置方面的复杂性。

None（无）驱动：
None 驱动会为容器创建一个网络栈，但不会为其配置任何网络。这意味着容器之间无法直接通信，也无法访问外部网络。通常用于特定网络配置需求或测试目的。


--容器的网络模式

Bridge（桥接）模式：
这是 Docker 默认的网络模式。

容器通过 Docker 守护进程创建的桥接接口连接到宿主机的网络。

容器之间可以相互通信，也可以通过端口映射暴露服务给外部网络访问。

用于在同于docker主机上运行的容器之间的通信。

Host（主机）模式：
容器与宿主机共享网络命名空间。

容器使用宿主机的网络栈，无需进行端口映射即可直接访问宿主机上的网络设备和端口。

这种模式下容器的网络性能可能更好，但也可能导致网络配置冲突和安全性问题。

None（无）模式：
容器不会配置任何网络。

容器之间无法直接通信，也无法访问外部网络。

通常用于特殊网络配置需求或测试目的。


--当你安装了docker,它会自动创建3个网络模式，

可以使用 docker network ls 命令来查看所有网络
NETWORK ID     NAME         DRIVER    SCOPE
99011ca86481   bridge       bridge    local
fe97024edc8f   host         host      local
b721db3fb1bf   none         null      local

  使用 ifconfig  查看docker0虚拟网桥，与docker  inspect  bridge命令的内容匹配，这里有网桥网络地址和网关的信息，
个人理解应该是docker自己生成。
  
  在宿主机上创建一对虚拟网卡veth pair设备，Docker将veth pair设备的一端放在新创建的容器中，并命名为eth0（容器的网卡），
另一端放在宿主机中，以vethxxx这样类似的名字命名，并将这个网络设备加入到docker0网桥中。
 
  注:bridge为默认模式，创建容器的时候不需要使用参数--net去指定， 这种模式会为每个容器分配一个独立的Network Namespace(网络空间)
同一个宿主机上的所有容器会在同一个网段下，相互之间是可以通信的

  其它模式需要在创建容器时使用--net去指定
  
  ***注意：Docker0的默认IP是172.17.0.0/24这个网段开始，使用这个IP可能会和公司内网络冲突，造成网络故障。会造成没办法ssh到服务器。

  默认情况下，Docker Compose会创建一个名为<当前目录>_default的默认网络，并为每个服务分配一个唯一的IP地址。
这些IP地址是自动分配的，我们无法直接指定。

  要为容器指定特定的IP地址，我们可以使用自定义网络。自定义网络允许我们完全控制网络的配置，包括IP地址的分配。
  
  
  
--DataEase在线安装完成后的提示

DataEase 服务状态 : 正常运行

DataEase 容器运行状态
NAME       IMAGE                                                         COMMAND                              SERVICE    CREATED              STATUS                        PORTS
dataease   registry.cn-qingdao.aliyuncs.com/dataease/dataease:v1.18.14   "/deployments/run-ja…"               dataease   About a minute ago   Up 46 seconds (healthy)       0.0.0.0:80->8081/tcp, :::80->808            1/tcp
mysql      registry.cn-qingdao.aliyuncs.com/dataease/mysql:8.1.0         "docker-entrypoint.s…"               mysql      About a minute ago   Up About a minute (healthy)   0.0.0.0:3306->3306/tcp, :::3306-            >3306/tcp, 33060/tcp

Docker 目录及文件大小 :
3.7G    /var/lib/docker

请通过以下方式访问:
 URL: http://$LOCAL_IP
 用户名: admin
 初始密码: dataease
 



mysql的默认密码：Password123@mysql
 
 
  


