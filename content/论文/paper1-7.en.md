# Paper Overview

### Many-objective optimization of feature selection based on two-level particle cooperation

- **Authors**: Yu Zhou, Junhao Kang, Hainan Guo  
- **Published**: May 1, 2020  
- **Published in**: Information Sciences (INS)  
- **Paper Link**: https://doi.org/10.1016/j.ins.2020.05.004  
- **Code**: https://github.com/EMRGSZU/papers-code/tree/main/MOEAD-COPSO

### Abstract  
Feature Selection (FS) plays a crucial role in classification tasks, aiming to eliminate redundant and irrelevant features. However, for high-dimensional FS problems, Pareto-optimal solutions are often sparse—meaning most decision variables are zero. Solving such problems using most existing evolutionary algorithms is extremely challenging. In this work, FS is reformulated as a many-objective optimization problem with three objectives to minimize.

To address this, a **binary particle swarm optimization algorithm** with a **two-level particle cooperation strategy** is proposed. In the first level, ordinary particles generated randomly and strict particles filtered by ReliefF are combined for initialization to ensure fast convergence. In the second level, under the decomposition-based multi-objective optimization framework, particles cooperate during the update process to explore Pareto solutions more efficiently. Additionally, a **multi-objective reset operation** is introduced to help the algorithm escape local optima.

Experimental studies on 10 real-world benchmark datasets demonstrate that, compared to several state-of-the-art evolutionary and non-evolutionary FS methods, the proposed algorithm significantly reduces the number of selected features while achieving competitive classification accuracy.

<div align="center">
  <img src="images/papers/paper1-7.png" alt="Figure" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
