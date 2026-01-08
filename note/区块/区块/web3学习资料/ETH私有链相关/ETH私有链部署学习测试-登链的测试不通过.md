# ETH私有链部署学习测试
## 安装过程记录
### 预备条件
Go 语言（在本文中，我使用的是 Go 版本 1.22.0） https://golang.google.cn/dl/
Go Ethereum（在本文中，我使用的是 Geth 版本 1.13.14-stable）https://geth.ethereum.org/downloads
**这里展开一下**：sudo apt-get install ethereum **如果报错：**
Reading package lists... Done
Building dependency tree
Reading state information... Done
E: Unable to locate package ethereum
**解决办法：**
sudo apt update
sudo add-apt-repository ppa:ethereum/ethereum
sudo apt install ethereum

### 步骤如下：
1. 创建项目文件夹
在第一步中，我们将创建一个项目文件夹，用于创建区块链网络

mkdir geth-tutorial
使用命令行导航到你的项目文件夹。

cd geth-tutorial
2. 创建节点
在这一步中，我们将在区块链网络中为每个节点设置单独的文件夹。让我们创建名为“node1”和“node2”的文件夹来表示我们的网络节点。
mkdir node1 node2

3. 管理节点信息
在创建每个 node1 和 node2 文件夹后，我们将在项目文件夹的根目录中创建一个 info.txt 文件，以存储 node1 和 node2 的账户地址和密码等信息。这将帮助我们跟踪与节点相关的重要细节。
touch info.txt

4. 为 Node1 和 Node2 创建账户，**注意密码保存，公共密钥保存**
zhf@MS-CEVXSRKPSHOI:/soft/geth-tutorial$ cd node1
zhf@MS-CEVXSRKPSHOI:/soft/geth-tutorial/node1$ geth --datadir "./data" account new
INFO [11-12|15:11:31.345] Maximum peer count                       ETH=50 total=50
INFO [11-12|15:11:31.347] Smartcard socket not found, disabling    err="stat /run/pcscd/pcscd.comm: no such file or directory"
Your new account is locked with a password. Please give a password. Do not forget this password.
Password:
Repeat password:

Your new key was generated

Public address of the key:   0x2CcB089bc0162EFFb7eaCc8198215feFcA41Af16
Path of the secret key file: data/keystore/UTC--2024-11-12T07-11-42.943775534Z--2ccb089bc0162effb7eacc8198215fefca41af16

- You can share your public address with anyone. Others need it to interact with you.
- You must NEVER share the secret key with anyone! The key controls access to your funds!
- You must BACKUP your key file! Without the key, it's impossible to access account funds!
- You must REMEMBER your password! Without the password, it's impossible to decrypt the key!



5. node2的账户信息：密码同node1
zhf@MS-CEVXSRKPSHOI:/soft/geth-tutorial/node1/data/keystore$ cd ../../../node2
zhf@MS-CEVXSRKPSHOI:/soft/geth-tutorial/node2$ geth --datadir "./data" account new
INFO [11-12|15:12:50.722] Maximum peer count                       ETH=50 total=50
INFO [11-12|15:12:50.723] Smartcard socket not found, disabling    err="stat /run/pcscd/pcscd.comm: no such file or directory"
Your new account is locked with a password. Please give a password. Do not forget this password.
Password:
Repeat password:

Your new key was generated

Public address of the key:   0x8e6f28d31aBfd3CFdb4dDa152547C7A9a43b96d5
Path of the secret key file: data/keystore/UTC--2024-11-12T07-13-01.476231437Z--8e6f28d31abfd3cfdb4dda152547c7a9a43b96d5

- You can share your public address with anyone. Others need it to interact with you.
- You must NEVER share the secret key with anyone! The key controls access to your funds!
- You must BACKUP your key file! Without the key, it's impossible to access account funds!
- You must REMEMBER your password! Without the password, it's impossible to decrypt the key!


6. 验证账户创建
为了确保 node1 和 node2 的账户已成功创建，我们将检查每个节点数据目录中的 keystore 文件夹。

打开 node1 和 node2 数据目录中的 keystore 文件夹。
验证每个 keystore 文件夹中是否存在新账户文件。
通过确认账户文件的存在，我们可以确保 node1 和 node2 的账户已成功创建。

7. 保存账户信息
对于之前创建的账户，我们将 node1 和 node2 创建的账户的公钥地址和密码保存到 info.txt 文件中。

打开位于项目文件夹根目录的 info.txt 文件。
添加为 node1 和 node2 创建的每个账户的公钥地址和密码。

8. 创建配置文件
- 在这一步中，账户已创建，接下来我们将在项目根目录中创建一个名为“privateblock.json”的文件进行配置。然后，我们将复制并粘贴下面提供的脚本到“privateblock.json”文件中。

- 在项目的根目录中创建一个名为“privateblock.json”的文件。
将以下脚本复制并粘贴到“privateblock.json”中：
{  
  "config": {  
    "chainId": 1234567,  
    "homesteadBlock": 0,  
    "eip150Block": 0,  
    "eip155Block": 0,  
    "eip158Block": 0,  
    "byzantiumBlock": 0,  
    "constantinopleBlock": 0,  
    "petersburgBlock": 0,  
    "istanbulBlock": 0,  
    "berlinBlock": 0,  
    "clique": {  
      "period": 5,  
      "epoch": 30000  
    }  
  },  
  "difficulty": "1",  
  "gasLimit": "8000000",  
  "extradata": "0x0000000000000000000000000000000000000000000000000000000000000000{ INITIAL_SIGNER_ADDRESS }0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",  
  "alloc": {  
    "{ FIRST_NODE_ADDRESS }": {  
      "balance": "3000000000000000000000000000000000000"  
    },  
    "{ SECOND_NODE_ADDRESS }": {  
      "balance": "3000000000000000000000000000000000000"  
    }  
  }  
}
  
- 将“{ FIRST_NODE_ADDRESS }{ SECOND_NODE_ADDRESS }”替换为每个节点账户的公钥地址，并将“{ INITIAL_SIGNER_ADDRESS }”更改为其中一个节点的公钥地址（去掉前导的“0x”字符）。
例如，这些是我为每个节点创建的账户

node1
公钥：0x2CcB089bc0162EFFb7eaCc8198215feFcA41Af16
密码：ZHF@4933807
node2
公钥：0x8e6f28d31aBfd3CFdb4dDa152547C7A9a43b96d5
密码：ZHF@4933807

- 这是我在 privateblock.json 中的脚本

{  
    "config": {  
      "chainId": 1234567,  
      "homesteadBlock": 0,  
      "eip150Block": 0,  
      "eip155Block": 0,  
      "eip158Block": 0,  
      "byzantiumBlock": 0,  
      "constantinopleBlock": 0,  
      "petersburgBlock": 0,  
      "istanbulBlock": 0,  
      "berlinBlock": 0,  
      "clique": {  
        "period": 5,  
        "epoch": 30000  
      }  
    },  
    "difficulty": "1",  
    "gasLimit": "8000000",  
    "extradata":   "0x0000000000000000000000000000000000000000000000000000000000002CcB089bc0162EFFb7eaCc8198215feFcA41Af160000000000000000000000000000000000000000000000000000000000000000000  0000000000000000000000000000000000000000000000000000000000000000000",  
    "alloc": {  
      "2CcB089bc0162EFFb7eaCc8198215feFcA41Af16": {  
        "balance": "3000000000000000000000000000000000000"  
      },  
      "8e6f28d31aBfd3CFdb4dDa152547C7A9a43b96d5": {  
        "balance": "3000000000000000000000000000000000000"  
      }  
    }  
  }

  9. 初始化节点
账户和配置已创建，现在是时候使用以下命令初始化每个节点：
**分别在node1和node2目录中运行以下命令：**
geth --datadir ./data init ../privateblock.json

zhf@MS-CEVXSRKPSHOI:/soft/geth-tutorial/node1$ geth --datadir ./data init ../privateblock.json
INFO [11-12|16:31:03.109] Maximum peer count                       ETH=50 total=50
- **这行日志表示 Geth 客户端配置的最大对等节点（peer）数量。在这个例子中，以太坊（ETH）的最大对等节点数被设置为 50，总对等节点数也是 50。**
INFO [11-12|16:31:03.110] Smartcard socket not found, disabling    err="stat /run/pcscd/pcscd.comm: no such file or directory"
- **这行日志说明 Geth 客户端尝试查找智能卡（smartcard）的 socket 文件，但没有找到，因此智能卡功能被禁用。这是一个信息性消息，表明智能卡不是当前配置的一部分。**
INFO [11-12|16:31:03.112] Set global gas cap                       cap=50,000,000
**这行日志表示全局的 gas 限制（cap）被设置为 50,000,000。在以太坊中，gas 是衡量执行智能合约或交易操作所需计算工作量的单位。**
INFO [11-12|16:31:03.112] Initializing the KZG library             backend=gokzg
**这行日志表示 Geth 客户端正在初始化 KZG（Kate-Zaverucha-Goldberg）库，这是一个用于高效验证多项式承诺的密码学库。在这里，使用的后端是 gokzg。**
INFO [11-12|16:31:03.138] Defaulting to pebble as the backing database
**这行日志说明 Geth 客户端正在使用 Pebble 作为其后端数据库。Pebble 是一种轻量级的键值存储，用于存储区块链数据。**
INFO [11-12|16:31:03.138] Allocated cache and file handles         database=/soft/geth-tutorial/node1/data/geth/chaindata cache=16.00MiB handles=16
**这行日志表示 Geth 客户端已经为数据库分配了缓存和文件句柄。数据库路径被指定，缓存大小为 16 MiB，文件句柄数量为 16。**
INFO [11-12|16:31:03.194] Opened ancient database                  database=/soft/geth-tutorial/node1/data/geth/chaindata/ancient/chain readonly=false
**这行日志表示 Geth 客户端已经打开了一个古老的数据库（ancient database），用于存储较旧的区块链数据。这个数据库不是只读的。**
INFO [11-12|16:31:03.195] State schema set to default              scheme=path
**这行日志表示状态模式（state schema）被设置为默认值，使用路径（path）方案。**
ERROR[11-12|16:31:03.195] Head block is not reachable
**这行日志是一个错误消息，表示当前的头部区块（head block）不可达。这可能意味着区块链数据不完整或者客户端配置有问题。**
INFO [11-12|16:31:03.225] Opened ancient database                  database=/soft/geth-tutorial/node1/data/geth/chaindata/ancient/state readonly=false
**这行日志再次确认 Geth 客户端已经打开了另一个古老的数据库，这次是用于存储状态数据的。**
INFO [11-12|16:31:03.225] Writing custom genesis block
**这行日志表示 Geth 客户端正在写入一个自定义的创世区块（genesis block）。**
INFO [11-12|16:31:03.291] Successfully wrote genesis state         database=chaindata hash=a7142d..62f74a
**这行日志表示创世区块的状态已经成功写入数据库。这里的 hash=a7142d..62f74a 是创世区块的哈希值的前缀和后缀，用于标识这个区块。**

10. 设置 Bootnode
在这一步中，我们将在项目目录的根目录中创建一个名为“bnode”的文件夹来设置 bootnode。bootnode 充当以太坊网络中节点发现的中心枢纽。它生成唯一的 enode URL 并促进新节点的连接，实现网络同步和去中心化通信。

在项目的根目录中创建一个名为“bnode”的文件夹。

mkdir bnode  
cd bnode

11. 生成 Bootnode 密钥并运行 Bootnode
接下来，我们将生成 bootnode 密钥并运行 bootnode。

- 在“bnode”文件夹中生成 bootnode 密钥：
bootnode -genkey boot.key
- 生成密钥后，使用以下命令运行 bootnode：
bootnode -nodekey boot.key -verbosity 7 -addr "127.0.0.1:30301"
