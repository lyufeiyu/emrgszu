# Paper Overview

### Collaborative block compressed sensing reconstruction with dual-domain sparse representation

- **Authors**: Yu Zhou, Hainan Guo  
- **Published**: August 26, 2018  
- **Published in**: Information Sciences (INS)  
- **Paper Link**: https://doi.org/10.1016/j.ins.2018.08.064

### Abstract  
In the past decade, image reconstruction based on compressed sensing (CS) has attracted considerable interest among signal processing researchers. Since images contain large amounts of information, **block compressed sensing (BCS)** is commonly used to divide the entire image into non-overlapping sub-blocks and process each block independently. However, independent reconstruction ignores correlations between neighboring blocks, leading to degraded objective and subjective quality.

To achieve better image reconstruction, this paper proposes a **collaborative BCS (CBCS) framework with dual-domain sparse representation**, which simultaneously considers **local structure information (LSI)** and **non-local pixel similarity**.

During the reconstruction process, a **locally data-adaptive kernel regressor** is used to extract local structural features, helping establish correlations between neighboring pixels and preserving detail. Meanwhile, a **perceptual non-local similarity (PNLS)** model based on human visual perception is employed to improve visual quality.

Additionally, we adopt both analysis and synthesis sparse models to enhance sparsity and formulate the BCS reconstruction problem under a dual-domain sparse representation model. A **multi-criteria Nash equilibrium-based iterative method** is then proposed to solve the reconstruction problem efficiently.

Experimental results on benchmark images demonstrate that the proposed method achieves **competitive performance both numerically and visually**, compared to several state-of-the-art BCS algorithms.

<div align="center">
  <img src="images/papers/paper3-2.png" alt="Figure" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
