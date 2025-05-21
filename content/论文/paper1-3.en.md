# Paper Overview

### Region Purity-based Local Feature Selection: A Multi-Objective Perspective

- **Authors**: Yu Zhou, Yan Qiu, Sam Kwong  
- **Published**: 2022  
- **Published in**: IEEE Transactions on Evolutionary Computation (TEVC)  
- **Paper Link**: https://ieeexplore.ieee.org/abstract/document/9953116  
- **Code**: https://github.com/EMRGSZU/papers-code/tree/main/

### Abstract  
Unlike traditional feature selection, local feature selection (LFS) partitions the entire sample space and identifies a feature subset for each local region. However, most existing LFS algorithms lack problem-specific objective functions and often apply simple distance-based metrics, which limits their classification performance. Moreover, finding a good LFS model is essentially a multi-objective optimization problem. To address this, this paper proposes a region purity-based LFS (RP-LFS). In addition to the proportion of selected features and region-based distance metrics, a novel objective called **region purity** is introduced from the perspective of combining local features with classifiers.

To solve RP-LFS, an improved non-dominated sorting genetic algorithm is proposed. Specifically, network-inspired crossover and fast bit mutation are applied to enhance search capability. A regional feature-sharing strategy across different local models is also designed to retain more informative features. Experimental studies on 11 UCI datasets and 9 high-dimensional datasets validate the effectiveness of the proposed RP. Compared to various state-of-the-art feature selection and LFS algorithms, RP-LFS achieves highly competitive classification performance with a much smaller feature subset size.

<div align="center">
  <img src="images/papers/paper1-3_2.png" alt="Figure 1" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>

<div align="center">
  <img src="images/papers/paper1-3_3.png" alt="Figure 2" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
