# 论文介绍

### An evolutionary multi-objective optimization framework of discretization-based feature selection for classification

- **作者**：Yu Zhou, Junhao Kang, Sam Kwong, Xu Wang, Qingfu Zhang  
- **发表时间**：2020年9月6日  
- **发表在**：Swarm and Evolutionary Computation ( SWEVO )  
- **论文链接:** https://doi.org/10.1016/j.swevo.2020.100770  
- **code:** https://github.com/EMRGSZU/papers-code/tree/main/MOEAD-FCPSO

### 摘要  
特征选择（Feature Selection，FS）的目的是找出最相关且非冗余的特征子集，以提高分类准确率，这被认为是一个 NP 难问题。一些启发式方法，如粒子群优化（PSO）取得了巨大成功，但随着特征数量的增加，解空间过大，导致搜索效率降低。最新的基于离散化的 FS 方法将特征域的搜索映射到切点域，从而缩小了解空间，显著提高了性能。本文考虑到不同目标之间的冲突，提出了基于离散化 FS 的进化多目标优化框架。为了获得帕累托解，本文引入了一种灵活切点 PSO（FCPSO），它可以选择任意数量的切点进行离散化，以帮助更好地探索相关特征。在 FCPSO 中，粒子更新和新型自适应突变算子交替使用，以有效地找到相关特征并去除冗余特征。最后，为了选择最佳特征子集，我们设计了一种帕累托集合方法，在帕累托集合的基础上生成若干可行的解决方案，然后进行分层解决方案选择过程。我们使用三种具有代表性的多目标进化算法实现了所提出的框架，并将它们与一些最先进的方法进行了比较。在十个基准微阵列基因数据集上的实验结果表明，在特征子集规模具有竞争力的情况下，我们提出的框架在测试分类准确率方面明显优于其他方法。

<div align="center">
  <img src="images/papers/paper1-5.png" alt="图示" style="max-width: 700px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
