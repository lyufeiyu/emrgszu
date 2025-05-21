# Paper Overview

### Problem Specific MOEA/D for Barrier Coverage with Wireless Sensors

- **Authors**: Xiao Zhang, Yu Zhou, Qingfu Zhang, Victor C. S. Lee, Minming Li  
- **Published**: June 15, 2016  
- **Published in**: IEEE Transactions on Cybernetics (TCYB)  
- **Paper Link**: https://ieeexplore.ieee.org/abstract/document/7515224/

### Abstract  
The objective of barrier coverage using wireless sensors is to detect intruders attempting to cross a protected area, where the sensors are randomly and remotely distributed. This paper considers the deployment of limited-power sensors with adjustable sensing ranges along a linear region to form a barrier for intrusion detection. Three objectives are introduced: 1) minimizing total energy consumption while maintaining full coverage; 2) minimizing the number of active sensors to improve reliability; and 3) minimizing the maximum sensing range among active sensor nodes to maintain fairness.

This problem is referred to as the Trade-off Barrier Coverage (TBC) problem. To balance the three objectives, we propose a multiobjective optimization framework based on MOEA/D, called Problem-Specific MOEA/D (PS-MOEA/D). Specifically, a 2-tuple encoding scheme and a cover-shrink algorithm are introduced to generate feasible near-optimal solutions. Then, problem-specific knowledge is incorporated into local search, allowing cooperative search among neighboring subproblems.

Considering the problem characteristics, we analyze the complexity and incorporate a computational resource allocation strategy into the algorithm. The proposed method is compared against four competitors using several widely adopted metrics. Experimental results show that PS-MOEA/D is effective and consistently outperforms all four competitors, indicating the promise of our method in solving the TBC problem.

<div align="center">
  <img src="images/papers/paper1-9.png" alt="Figure" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
