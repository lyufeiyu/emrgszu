# 论文介绍

### A Lightweight Recurrent Learning Network for Sustainable Compressed Sensing

- **作者**：Yu Zhou, Yu Chen  
- **发表时间**：2023年  
- **发表在**：IEEE Transactions on Emerging Topics in Computational Intelligence (TETCI)  
- **论文链接:** https://ieeexplore.ieee.org/abstract/document/10124723  
- **code:** https://github.com/C66YU/CSRN

### 摘要  
最近，基于深度学习的压缩传感（CS）在降低传感系统的采样和计算成本以及提高重建质量方面上取得了巨大成功。然而，这些方法在很大程度上忽略了计算成本的问题；它们依赖于复杂的结构和对于任务的独特操作的设计，导致 CS 成像系统的大量存储和高能量消耗。

在这篇文章中，我们提出了一个基于可循环的学习方式的轻量级而且有效的深度神经网络，以实现可持续的 CS 系统；它需要的参数数量较少，但能获得高质量的重建结果。具体来说，我们提出的网络由一个初始重建子网络和一个残余重建子网络组成。初始重建子网络具有分层结构，可以逐步恢复图像，减少参数数量，而残余重建子网络则通过循环学习的方式促进循环的残余特征提取，以进行不同尺度的特征融合和深度重建。

此外，我们还证明，在初始重建后，尺寸缩小的特征图足以恢复残余信息，因此我们实现了所需内存量的大幅减少。广泛的实验表明，我们提出的模型可以达到比现有的最先进的 CS 算法更好的重建质量，而且它的网络参数数量也比这些算法少。

<div align="center">
  <img src="images/papers/paper3-1.png" alt="图示" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
