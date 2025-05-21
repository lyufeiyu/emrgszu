# Paper Overview

### A problem-specific non-dominated sorting genetic algorithm for supervised feature selection

- **Authors**: Yu Zhou, Wenjun Zhang, Junhao Kang, Xiao Zhang, Xu Wang  
- **Published**: August 23, 2020  
- **Published in**: Information Sciences (INS)  
- **Paper Link**: https://doi.org/10.1016/j.ins.2020.08.083  
- **Code**: https://github.com/EMRGSZU/papers-code/tree/main/PS-NSGA

### Abstract  
Feature Selection (FS) plays a crucial role in classification tasks, and recently it has been formulated as a Multi-objective Optimization Problem (MOP). In this paper, we consider three FS objectives to minimize and propose a problem-specific non-dominated sorting genetic algorithm (PS-NSGA). In PS-NSGA, we introduce an accuracy-prioritized dominance operator, allowing individuals with higher classification accuracy to survive with greater probability. In addition, a fast bitwise mutation operator is proposed to break the limitations of traditional bitstring mutation and improve efficiency. We also design a mutation retry operator and a recombination operator to accelerate and enhance convergence. Lastly, we develop a solution selection strategy to determine the most suitable feature subset from the obtained Pareto front. Experimental results on 15 real-world high-dimensional datasets show that our method achieves smaller feature subset sizes with competitive classification accuracy compared to several state-of-the-art evolutionary and traditional FS algorithms.

<div align="center">
  <img src="images/papers/paper1-6.png" alt="Figure" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
