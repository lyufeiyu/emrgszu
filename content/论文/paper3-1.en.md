# Paper Overview

### A Lightweight Recurrent Learning Network for Sustainable Compressed Sensing

- **Authors**: Yu Zhou, Yu Chen  
- **Published**: 2023  
- **Published in**: IEEE Transactions on Emerging Topics in Computational Intelligence (TETCI)  
- **Paper Link**: https://ieeexplore.ieee.org/abstract/document/10124723  
- **Code**: https://github.com/C66YU/CSRN

### Abstract  
Recently, deep learning-based compressed sensing (CS) has achieved great success in reducing sampling and computational costs and improving reconstruction quality in sensing systems. However, most of these methods largely overlook computational efficiency. They rely on complex architectures and task-specific operations, resulting in excessive memory requirements and high energy consumption in CS imaging systems.

In this paper, we propose a lightweight and effective deep neural network with a recurrent learning mechanism to enable sustainable CS systems. Our method significantly reduces the number of network parameters while achieving high-quality reconstruction.

Specifically, our network comprises an initial reconstruction sub-network and a residual reconstruction sub-network. The initial reconstruction network adopts a hierarchical structure to progressively recover the image, reducing parameters. The residual sub-network uses recurrent learning to enhance residual feature extraction, enabling multi-scale feature fusion and deep reconstruction.

Moreover, we demonstrate that the reduced-size feature maps generated after initial reconstruction are sufficient for residual recovery, thus significantly reducing memory requirements. Extensive experiments show that our proposed model achieves better reconstruction quality than state-of-the-art CS algorithms while using fewer parameters.

<div align="center">
  <img src="images/papers/paper3-1.png" alt="Figure" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
