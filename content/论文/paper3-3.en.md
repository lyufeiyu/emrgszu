# Paper Overview

### A Two-Phase Evolutionary Approach for Compressive Sensing Reconstruction

- **Authors**: Mengyuan Wu, Ke Li, Sam Kwong, Yu Zhou, and Qingfu Zhang  
- **Published**: February 22, 2017  
- **Published in**: IEEE Transactions on Cybernetics (TCYB)  
- **Paper Link**: https://ieeexplore.ieee.org/abstract/document/7900408/

### Abstract  
Sparse signal reconstruction can be viewed as a problem of locating non-zero entries of a signal. In the presence of measurement noise, traditional methods such as the l1-norm relaxation and greedy algorithms show weaknesses in accurately finding these non-zero entries.

To reduce noise interference and better identify non-zero entries, this paper proposes a **two-phase approach** from coarse to fine.

In the first phase, a **decomposition-based multi-objective evolutionary algorithm** is used to optimize the l1 norm and generate a robust set of candidate solutions. To suppress noise, statistical features for each entry across these solutions are extracted, and clustering is applied to determine a set of likely non-zero entries.

In the second phase, a **forward selection-based method** is introduced to further refine the candidate set and more accurately identify non-zero entries using those statistical features. Finally, the signal amplitude is obtained via **least squares estimation**.

The proposed method is compared with several state-of-the-art CS reconstruction algorithms, the best results from Phase 1, and a combined two-phase method without statistics.

Experiments on both benchmark and randomly generated signals demonstrate that our method consistently outperforms the above approaches in recovery accuracy while achieving higher sparsity.

<div align="center">
  <img src="images/papers/paper3-3.png" alt="Figure" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
