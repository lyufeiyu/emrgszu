# Paper Overview

### Feature Selection for High - Dimensional Data Based on a Multi - objective Particle Swarm Optimization with Self - adjusting Strategy Pool

- **Authors**: Yingyu Peng, Ruiqi Wang, Dandan Yu & Yu Zhou  
- **Published**: 2022  
- **Published in**: Neural Computing for Advanced Applications (NCAA 2022)  
- **[Paper Link](https://link.springer.com/chapter/10.1007/978-981-19-6142-7_39)**  
- **Code**: https://github.com/EMRGSZU/papers-code

### Abstract  
The advancement of data collection has increased the dimensionality of data in many fields, even leading to the problem of dimensional explosion, which brings challenges to many existing feature selection methods. This paper proposes a method called MOPSO-SaSP, based on feature prioritization and multi-objective particle swarm optimization with a self-adjusting strategy pool. The proposed algorithm employs a backward filtering method based on Markov chains as a preprocessing step to divide features into primary and secondary ones, aiming to reduce the search space and decrease the randomness during initialization. Then, an adaptive mechanism is applied, allowing each particle to adaptively select a strategy from the strategy pool based on the latest collected information. The strategy pool is constructed by performing a series of experiments on the training data, with different strategies tailored for different search behaviors. Experiments conducted on 8 benchmark microarray gene datasets show that the feature prioritization method can effectively handle features, and the adaptive mechanism serves as a powerful search method, achieving competitive classification accuracy and reducing the number of selected features.

### Solution  
The overall flow of the proposed method is shown in Figure 1. First, a feature prioritization method based on the Markov Blanket (AMB) is used to divide the relevant features into primary and secondary ones, and AMB processing is performed on this basis. Then, using the self-adjusting strategy pool, MOPSO-SaSP is applied to obtain Pareto-optimal solutions. Finally, the candidate solution with the highest classification accuracy is selected as the final feature subset.

<div align="center">
  <img src="images/papers/paper1-1.png" alt="Method Overview" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
