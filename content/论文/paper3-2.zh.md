# 论文介绍

### Collaborative block compressed sensing reconstruction with dual-domain sparse representation

- **作者**：Yu Zhou, Hainan Guo  
- **发表时间**：2018年8月26日  
- **发表在**：Information Sciences ( INS )  
- **论文链接:** https://doi.org/10.1016/j.ins.2018.08.064

### 摘要  
在过去十年中，基于压缩传感（CS）的图像重建引起了信号处理研究人员的极大兴趣。由于图像包含大量信息，块压缩传感（BCS）通常被用于将整个图像划分为非重叠的子块，分别处理所有子块。然而，独立重建忽略了相邻子块之间的相关性，导致客观和主观评估的质量下降。为了获得令人满意的重建图像，本文提出了一种具有双域稀疏表示的协作 BCS（CBCS）框架，其中共同考虑了局部结构信息（LSI）和非局部像素相似性。在重建过程中，引入局部数据自适应核回归器来提取局部图像结构，这有助于建立相邻子块之间像素的相关性，并保留图像的细节。同时，基于人类视觉系统的感知非局部相似性（PNLS）被用来提高视觉质量。此外，我们还采用了分析模型和合成模型来进一步提高稀疏性，并提出了基于双域稀疏表示的 BCS 重建问题。最后，我们提出了一种基于多标准纳什均衡技术的高效迭代方法来解决这一问题。在基准图像上的实验结果表明，与一些最先进的 BCS 算法相比，所提出的方法在数值和视觉上都能取得有竞争力的结果。

<div align="center">
  <img src="images/papers/paper3-2.png" alt="图示" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
