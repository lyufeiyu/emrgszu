# 论文介绍

### A Hybrid Attention-Based Deep Neural Network for Simultaneous Multi-Sensor Pruning and Human Activity Recognition

- **作者**：Yu Zhou, Zhuodi Yang, Xiao Zhang, Yufan Wang  
- **发表时间**：2022年  
- **发表在**：IEEE Internet of Things Journal (JIOT)  
- **论文链接:** https://ieeexplore.ieee.org/abstract/document/9848473  
- **code:** https://github.com/EMRGSZU/papers-code/tree/main/HAP-DNN

### 摘要  
随着物联网技术的普及和发展，利用物联网设备（如可穿戴传感器）进行人体活动识别可以实现各种应用。由于活动识别的复杂性，在大多数可穿戴活动识别系统中，使用多个同质或异质的传感器来获取过多的信息。然而，传感器数量的增加和多通道信号数据的方式给人类活动识别任务带来巨大挑战。如何选择合适的传感器通道来平衡计算的复杂性和识别的准确性已经成为一个主要问题。

在这篇文章中，我们将稀疏组 Lasso 机制扩展到人类活动识别任务中，并提出了一个基于注意力的多传感器修剪和特征选择的混合深度神经网络，称为 HAP-DNN。这个架构能够在传感器剪枝的基础上进一步进行特征选择。HAP-DNN 由三个可分离的模块组成：  
1）用于传感器特征信息融合和恢复的特征压缩与重建模块；  
2）用于计算传感器通道权重和特征权重的特征权重计算模块；  
3）用于分类的学习模块，它可以被视为一种过滤特征选择方法。

四个公共活动识别数据集被用来验证我们提出的架构，实验结果显示，HAP-DNN 以最少的保留特征通道数量获得了最佳的分类性能。

<div align="center">
  <img src="images/papers/paper1-10.png" alt="图示" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
