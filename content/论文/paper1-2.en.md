# Paper Overview

### Feature library-assisted surrogate model for evolutionary wrapper-based feature selection and classification

- **Authors**: Hainan Guo, Junnan Ma, Ruiqi Wang, Yu Zhou  
- **Published**: 2023  
- **Published in**: Applied Soft Computing (ASOC)  
- **[Paper Link](https://link.springer.com/chapter/10.1007/978-981-19-6142-7_39)**  
- **Code**: https://github.com/EMRGSZU/papers-code/tree/main/

### Abstract  
In recent years, wrapper-based feature selection (FS) has been extensively explored in evolutionary computation due to its capability to search and evaluate feature subsets based on populations. However, such methods typically suffer from high computational cost and long runtimes, primarily because of the need to assess each subset via classification performance. To address this issue, this paper proposes a feature-library-assisted surrogate model (FL-SM) aimed at reducing computational cost while maintaining high predictive accuracy. Unlike existing surrogate models for FS that focus on the sample level, this approach emphasizes the feature level: the feature library (FL) is built by collecting scores for all features during the evolutionary process. Specifically, each candidate solution is pre-evaluated based on the FL using simple operations to decide whether it should be passed to a classifier, thereby improving the efficiency of FS. Since skipping the evaluation of some candidates might lead to inaccurate selections, a dynamic individual selection criterion is introduced. Additionally, an adaptive FL update operator is proposed to handle the dynamic changes in the evolving population and maintain the real-time validity of the FL. The proposed FL-SM is embedded into several state-of-the-art single-objective and multi-objective evolutionary FS methods. Experimental results on benchmark datasets show that FL-SM offers good flexibility and scalability, effectively reduces the computational cost of wrapper-based FS, and still obtains high-quality feature subsets. Across five tested algorithms, the average computation time was reduced by 34.87%. In 80% of the tests, classification accuracy remained comparable, and in 6% of cases, our method even improved it.

<div align="center">
  <img src="images/papers/paper1-2_1.png" alt="Figure 1" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>

<div align="center">
  <img src="images/papers/paper1-2_2.png" alt="Figure 2" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
