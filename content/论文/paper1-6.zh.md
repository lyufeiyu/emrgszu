# 论文介绍

### A problem-specific non-dominated sorting genetic algorithm for supervised feature selection

- **作者**：Yu Zhou, Wenjun Zhang, Junhao Kang, Xiao Zhang, Xu Wang  
- **发表时间**：2020年8月23日  
- **发表在**：Information Sciences ( INS )  
- **论文链接:** https://doi.org/10.1016/j.ins.2020.08.083  
- **code:** https://github.com/EMRGSZU/papers-code/tree/main/PS-NSGA

### 摘要  
特征选择（FS）在分类任务中发挥着重要作用，最近有人将其作为多目标优化问题（MOP）来研究。在本文中，我们考虑了最小化 FS 的三个目标，并提出了一种针对特定问题的非支配排序遗传算法（PS-NSGA）。在 PS-NSGA 中，应用了准确率优先支配算子，使种群中分类准确率较高的个体更有可能存活下来。同时，PS-NSGA 还采用了快速比特变异，突破了传统比特串变异的限制，提高了效率。此外，我们还设计了突变重试算子和组合算子，使算法收敛得更快、更好。最后，我们还开发了一种解选择策略，以从获得的帕累托解中确定最合适的特征子集。在 15 个真实世界高维数据集上的实验结果表明，与一些最先进的进化算法和传统 FS 算法相比，我们提出的算法可以获得较小的特征子集规模，同时达到具有竞争力的分类精度。

<div align="center">
  <img src="images/papers/paper1-6.png" alt="图示" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
