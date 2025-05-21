# 论文介绍

### Matching-Based Selection With Incomplete Lists for Decomposition Multiobjective Optimization

- **作者**：Mengyuan Wu, Ke Li, Sam Kwong, Yu Zhou, and Qingfu Zhang  
- **发表时间**：2017年1月7日  
- **发表在**：IEEE TRANSACTIONS ON EVOLUTIONARY COMPUTATION ( TEVC )  
- **论文链接:** https://ieeexplore.ieee.org/abstract/document/7837621/

### 摘要  
收敛性和多样性之间的平衡是进化多目标优化（EMO）的基石。最近提出的基于稳定匹配的选择为在分解多目标优化框架下处理这种平衡提供了一个新的视角。其中，子问题和解决方案之间的一一稳定匹配，实现了它们相互偏好之间的均衡，据称在收敛性和多样性之间取得了平衡。然而，原有的稳定婚配模型很有可能将一个解与一个不利的子问题匹配起来，最终导致不平衡的选择结果。本文在稳定匹配模型中引入了不完整偏好列表的概念，以弥补种群多样性的损失。具体来说，每个解决方案只允许保留由其最喜欢的子问题组成的部分偏好列表。我们利用不完整偏好列表实现了两个版本的基于稳定匹配的选择机制：一个实现了两级一一匹配，另一个实现了多级一一匹配。此外，我们还开发了一种自适应机制，可根据每个解决方案的局部竞争力自动设置不完整偏好列表的长度。我们提出的方法的有效性和竞争力得到了验证，并在 62 个基准问题上与几种最先进的 EMO 算法进行了比较。

<div align="center">
  <img src="images/papers/paper1-8.png" alt="图示" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
