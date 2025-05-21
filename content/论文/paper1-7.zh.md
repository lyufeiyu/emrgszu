# 论文介绍

### Many-objective optimization of feature selection based on two-level particle cooperation

- **作者**：Yu Zhou, Junhao Kang, Hainan Guo  
- **发表时间**：2020年5月1日  
- **发表在**：Information Sciences (INS )  
- **论文链接:** https://doi.org/10.1016/j.ins.2020.05.004  
- **code:** https://github.com/EMRGSZU/papers-code/tree/main/MOEAD-COPSO

### 摘要  
特征选择（FS）在分类中起着至关重要的作用，其目的是去除冗余和不相关的数据特征。然而，对于高维 FS 问题，帕累托最优解通常是稀疏的，即大部分决策变量为零。使用现有的大多数进化算法解决此类问题非常困难。在本文中，我们将 FS 重新表述为一个多目标优化问题，包括三个需要最小化的目标。为了解决这个问题，我们提出了一种二元粒子群优化算法，并采用了两级粒子合作策略。在第一级，为了保持快速收敛，将随机生成的普通粒子和经过 ReliefF 过滤的严格粒子组合起来作为初始化粒子。在第二层，在分解多目标优化框架下，粒子之间在更新过程中进行合作，以更高效地搜索帕累托方案。此外，还提出了一种多目标重置操作，使算法能够跳出局部最优。在 10 个真实世界基准数据集上进行的实验研究表明，与一些最先进的进化 FS 方法和非进化方法相比，我们提出的算法可以有效减少特征数量，并获得有竞争力的分类准确率。

<div align="center">
  <img src="images/papers/paper1-7.png" alt="图示" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
