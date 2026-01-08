## **PS:** Arbitrum
Arbitrum是一个基于以太坊的二层区块链网络，由Offchain Labs开发，采用Optimistic Rollup技术来提高以太坊的可扩展性。以下是Arbitrum链的一些关键特点和信息：

1. 技术方案及特点：
Arbitrum基于Optimistic Rollup解决方案，通过经济激励的博弈模型维护安全性，并通过欺诈证明来维护交易有效性。
它采用多轮欺诈证明交互，降低单次挑战需要消耗的gas，不必担心gas费用超出限制。
Arbitrum对EVM（以太坊虚拟机）的兼容性更强，几乎100%兼容，使得从以太坊一层迁移过来的项目不需要修改代码。

2. 运行的链：
Arbitrum运行两条并行的链：一条Roll-up链称为“Arbitrum Nitro”，另一条AnyTrust链称为“Nova”。
Arbitrum Nitro遵循Optimistic Rollup的特征操作，将交易数据捆绑到以太坊链上进行存储。
Nova依靠第三方称为外部数据可用性委员会存储交易数据，并根据需求进行产生，通过避免将交易数据捆绑到以太坊链上，交易费用大大降低。

3. 性能：
Arbitrum链的处理速度可以达到每秒40,000笔交易。

4. 安全性：
Arbitrum继承了以太坊级别的安全性，可以完全与以太坊兼容，同时交易速度更快、gas费更便宜。

5.生态发展：
Arbitrum生态中包含多个领域的项目，如DeFi、NFT、游戏等，并且与多个跨链桥协议合作，支持资产在不同网络间的转移。

6. 合作项目：
Arbitrum与Chainlink合作，提升以太坊智能合约的可扩展性并降低运算成本。

7. 用户交互体验：
从用户的角度来看，Arbitrum链的交互体验与以太坊并无差别。

Arbitrum作为以太坊的二层扩展解决方案，旨在解决以太坊的低TPS问题，提供更快的交易速度和更低的交易费用，同时保持与以太坊的高安全性和兼容性。

## **PS:**  Arbitrum Orbit介绍
1. Arbitrum Orbit 是 Arbitrum 生态系统中的一个关键组成部分，它允许开发者在 Arbitrum 链上无需许可地构建自己的专用链（Layer 2 或 Layer 3）
2. 技术基础：
Arbitrum Orbit 提供了 Rollup 和 AnyTrust 技术，以实现最大的灵活性，构建理想的 Orbit 链。
Arbitrum Rollup 允许开发者在 Arbitrum One 上启动 Rollup 链，提供以太坊级别的安全性，以增加可扩展性。
Arbitrum AnyTrust 允许开发者启动 AnyTrust 链，如 Arbitrum Nova，具有最小的信任假设，同时实现极低的交易成本，适用于高交易量的应用。
3. 自定义和灵活性：
开发者可以构建并自定义 Orbit 链，以满足特定应用的需求，包括配置吞吐量、隐私、Gas 代币、治理和协议逻辑。
每个 Orbit 链都可以使用 Arbitrum Nitro 核心进行自定义设置，以适应不同的应用场景。
4. EVM+ 兼容性：
Arbitrum Orbit 受益于 Stylus 引入的相同 EVM+ 兼容性，允许使用 Solidity、C、C++ 和 Rust 部署与 EVM 兼容的智能合约。
5. 自定义 Gas 代币支持：
Arbitrum Orbit 最新增加了对自定义 Gas 代币的支持，允许 Orbit 链选择特定的 ERC-20 代币作为 Gas 费用，增强自有代币的实用性并扩大生态系统。
6. 生态项目：
目前已有 50 多个 Arbitrum Orbit 链正在开发中，预计到 2024 年主网上将有 150 个 Orbit 链。
这些项目主要涉及游戏、衍生品、流动性、NFT 等领域，希望借助 Orbit 链发挥低成本交易/交互、高吞吐量、自定义 Gas、自定义治理以及灵活的安全模型等优势。
7. 合作与支持：
Arbitrum 与 Rollup 即服务平台 Caldera、AltLayer 以及 Conduit 建立了合作关系，支持开发者启动自己的自定义 Rollup。
