# 论文介绍

### Feature Selection for High - Dimensional Data Based on a Multi - objective Particle Swarm Optimization with Self - adjusting Strategy Pool

- **作者**：Yingyu Peng, Ruiqi Wang, Dandan Yu & Yu Zhou
- **发表时间**：2022年
- **发表在**：Neural Computing for Advanced Applications(NCAA 2022)
- **[论文链接](https://link.springer.com/chapter/10.1007/978-981-19-6142-7_39)**
- **code**：https://github.com/EMRGSZU/papers-code

### 摘要
数据收集的发展增加了许多领域的数据维度，甚至可能造成维度爆炸，给许多现有的特征选择带来了挑战。本文提出了一种基于特征优先级和多目标粒子群优化与自我调整策略池（MOPSO - SaSP）的方法。本文提出的算法采用了基于马尔科夫链的后向滤波方法作为预处理步骤，将特征优先分为主要特征和次要特征，以减少搜索空间并降低初始化步骤的随机性。之后，采用自适应机制，使每个粒子根据收集到的最新信息从策略池中自适应地选择一个策略。策略池是通过对训练数据进行一系列的实验来构建的。不同的策略专门用于不同的搜索方法。在8个基准小型基因数据集上的实验结果显示，特征优先化方法可以有效地处理特征，自适应机制是一种强大的搜索方法，可以达到有竞争力的分类精度并减少特征的数量。 

### 解决方案
所提方法的整体流程如图1所示。首先，一个基于马尔可夫毯式（AMB）的特征的优先级方法，将相关的特征分为主要特征和次要特征，并在此基础上进行了马尔可夫毯式（AMB）的处理。将相关特征划分为主要特征和次要特征。然后，利用自我调整的策略池，MOPSO-SaSP被应用于获得帕累托最优方案。最后，具有最高分类精度的候选方案被选为最后，将分类精度最高的候选方案作为选定的特征子集。

<div align="center">
  <img src="images/papers/paper1-1.png" alt="方法流程图" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>

