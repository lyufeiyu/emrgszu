# 论文介绍

### Feature library-assisted surrogate model for evolutionary wrapper-based feature selection and classification

- **作者**：Hainan Guo , Junnan Ma , Ruiqi Wang , Yu Zhou  
- **发表时间**：2023年  
- **发表在**：Applied Soft Computing( ASOC )  
- **[论文链接](https://link.springer.com/chapter/10.1007/978-981-19-6142-7_39)**  
- **code**：https://github.com/EMRGSZU/papers-code/tree/main/

### 摘要  
近年来，基于包装的特征选择（FS）在进化计算的使用上被广泛研究，因为它能够根据种群来搜索和评估特征子集。然而，这些方法往往存在计算成本高和计算时间长的问题，主要是由于根据分类性能评估特征子集的过程。为了解决这个问题，本文提出了一个一特征库为辅助的代用模型（FL-SM），其目的是减少计算成本，但保持良好的预测精度。与现有的用于FS的代用模型不同，本文提出的方法侧重于特征层面而不是样本层面：FL是通过在进化搜索过程中收集所有特征的得分来建立的。具体来说，每个解决方案（子集候选）都根据FL进行预评估，只使用简单的操作来决定它是否值得被分类器评估，提高了FS算法的效率。同时，由于不评估一定数量的解决方案可能导致进化搜索过程中解决方案选择不准确，因此提出了动态的个体选择标准。此外，我们还提出了一个自适应的FL更新算子来处理进化群体的动态变化；它确保了FL的实时有效性。此外，我们将所提出的FL-SM纳入了一些最先进的单目标和多目标的进化FS方法。在基准数据集上的实验结果表明，FL-SM具有良好的灵活性和可扩展性，可以有效地降低基于包装的FS的计算成本，并且仍然可以获得高质量的特征子集。在测试的五种算法中，平均计算时间减少了34.87%；同时，在80%的测试中，分类精度没有明显差异，我们的方法甚至在6%的测试中提高了分类精度。

<div align="center">
  <img src="images/papers/paper1-2_1.png" alt="图示1" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>

<div align="center">
  <img src="images/papers/paper1-2_2.png" alt="图示2" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
