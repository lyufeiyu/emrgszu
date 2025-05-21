# 论文介绍

### Region Purity-based Local Feature Selection: A Multi-Objective Perspective

- **作者**：Yu Zhou, Yan Qiu, Sam Kwong  
- **发表时间**：2022年  
- **发表在**：IEEE Transactions on Evolutionary Computation (TEVC)  
- **论文链接:** https://ieeexplore.ieee.org/abstract/document/9953116  
- **code**：https://github.com/EMRGSZU/papers-code/tree/main/

### 摘要  
与传统的特征选择不同，局部特征选择（LFS）对整个样本空间进行分割，并获得每个局部区域的特征子集。然而，大多数现有的LFS算法缺乏针对问题的目标函数，而是简单地应用类似距离的目标函数，这限制了它们的分类性能。此外，获得一个好的LFS模型本质上是一个多目标的优化问题。因此，本文提出了一种基于区域纯度的LFS（RP-LFS），除了所选特征的比例和基于区域的距离度量，我们还从结合局部特征和分类器的角度设计了一个新颖的目标函数——区域纯度。为了解决RP-LFS，我们提出了一个改进的非主导排序遗传算法。具体来说，应用了网络启发的交叉交换和快速比特变异，这可以提高搜索更好的解决方案的能力。制定不同局部模型之间的区域特征共享策略，可以保留更多的有效特征。对11个UCI数据集和9个高维数据集的实验研究验证了我们提出的RP的有效性。与各种最先进的特征选择和LFS算法相比，RP-LFS可以获得非常有竞争力的分类精度，同时获得了较小的特征子集规模。

<div align="center">
  <img src="images/papers/paper1-3_2.png" alt="图示1" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>

<div align="center">
  <img src="images/papers/paper1-3_3.png" alt="图示2" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
