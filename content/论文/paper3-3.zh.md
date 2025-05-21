# 论文介绍

### A Two-Phase Evolutionary Approach for Compressive Sensing Reconstruction

- **作者**：Mengyuan Wu, Ke Li, Sam Kwong, Yu Zhou, and Qingfu Zhang  
- **发表时间**：2017年2月22日  
- **发表在**：IEEE TRANSACTIONS ON CYBERNETICS ( TCYB )  
- **论文链接:** https://ieeexplore.ieee.org/abstract/document/7900408/

### 摘要  
稀疏信号重构可视为信号非零条目定位问题。在存在测量噪声的情况下，l1 准则松弛法和贪婪算法等传统方法在准确找到非零条目方面表现出了弱点。

为了减少噪声的影响，更好地找到非零条目，本文提出了一种从粗到细的两阶段算法。

在第一阶段，应用基于分解的多目标进化算法，通过优化解的 l1 准则生成一组稳健解。为消除噪声干扰，提取这些解决方案中每个条目的统计特征，并通过聚类技术确定一组非零条目。

在第二阶段，提出了一种基于前向选择的方法，以进一步更新该集合，并根据这些特征更精确地定位非零条目。最后，通过最小二乘法获得重建信号的幅度。

我们将所提出的方法与几种最先进的压缩传感恢复方法、第 1 阶段的最佳结果以及结合第 1 和第 2 阶段但不包含统计特征的方法进行了比较。

在基准信号和随机生成信号上的实验结果表明，我们提出的方法优于上述方法，能获得更高的恢复精度，并保持更大的稀疏性。

<div align="center">
  <img src="images/papers/paper3-3.png" alt="图示" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
