# Paper Overview

### An evolutionary multi-objective optimization framework of discretization-based feature selection for classification

- **Authors**: Yu Zhou, Junhao Kang, Sam Kwong, Xu Wang, Qingfu Zhang  
- **Published**: September 6, 2020  
- **Published in**: Swarm and Evolutionary Computation (SWEVO)  
- **Paper Link**: https://doi.org/10.1016/j.swevo.2020.100770  
- **Code**: https://github.com/EMRGSZU/papers-code/tree/main/MOEAD-FCPSO

### Abstract  
Feature selection (FS) aims to identify the most relevant and non-redundant subset of features to enhance classification accuracy. It is considered an NP-hard problem. Heuristic approaches like particle swarm optimization (PSO) have shown great success, but the solution space becomes too large and inefficient as the number of features increases. Recently, discretization-based FS methods have mapped feature-space searches into cut-point space, thus reducing the search complexity and improving performance.

This paper proposes an **evolutionary multi-objective optimization framework** for discretization-based FS, taking into account the conflicting objectives in FS tasks. To obtain Pareto solutions, a **Flexible Cut-point PSO (FCPSO)** is introduced, which allows selecting an arbitrary number of cut points for discretization, enabling better exploration of relevant features. In FCPSO, particle updating and a novel adaptive mutation operator are alternately employed to efficiently find relevant features and eliminate redundant ones.

Finally, a **Pareto-set-based solution selection** method is designed: several feasible solutions are generated from the Pareto front and ranked through a layered solution selection process. The proposed framework is instantiated using three representative multi-objective evolutionary algorithms and compared with several state-of-the-art methods. Experimental results on ten benchmark microarray gene datasets show that our framework significantly outperforms existing approaches in terms of classification accuracy, while maintaining competitive feature subset sizes.

<div align="center">
  <img src="images/papers/paper1-5.png" alt="Figure" style="max-width: 700px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
