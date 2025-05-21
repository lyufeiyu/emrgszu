# Paper Overview

### Matching-Based Selection With Incomplete Lists for Decomposition Multiobjective Optimization

- **Authors**: Mengyuan Wu, Ke Li, Sam Kwong, Yu Zhou, and Qingfu Zhang  
- **Published**: January 7, 2017  
- **Published in**: IEEE Transactions on Evolutionary Computation (TEVC)  
- **Paper Link**: https://ieeexplore.ieee.org/abstract/document/7837621/

### Abstract  
The balance between convergence and diversity is a cornerstone of evolutionary multiobjective optimization (EMO). A recently proposed stable matching-based selection mechanism offers a new perspective for achieving this balance in the decomposition-based multiobjective optimization framework. In this approach, one-to-one stable matching between subproblems and solutions is achieved according to their mutual preferences, claiming to maintain equilibrium between convergence and diversity.

However, the original stable marriage model may undesirably match a solution to an unsuitable subproblem, leading to unbalanced selection. This paper introduces the concept of **incomplete preference lists** into the stable matching model to mitigate the loss of population diversity. Specifically, each solution is allowed to keep only a subset of its most preferred subproblems.

Two versions of stable matching-based selection are developed using these incomplete lists: a **two-level one-to-one matching**, and a **multi-level one-to-one matching**. Additionally, an **adaptive mechanism** is proposed to automatically determine the length of each solution’s incomplete preference list based on its local competitiveness. The effectiveness and competitiveness of the proposed method are validated through comparisons with several state-of-the-art EMO algorithms on **62 benchmark problems**.

<div align="center">
  <img src="images/papers/paper1-8.png" alt="Figure" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
