# Paper Overview

### A Hybrid Attention-Based Deep Neural Network for Simultaneous Multi-Sensor Pruning and Human Activity Recognition

- **Authors**: Yu Zhou, Zhuodi Yang, Xiao Zhang, Yufan Wang  
- **Published**: 2022  
- **Published in**: IEEE Internet of Things Journal (JIOT)  
- **Paper Link**: https://ieeexplore.ieee.org/abstract/document/9848473  
- **Code**: https://github.com/EMRGSZU/papers-code/tree/main/HAP-DNN

### Abstract  
With the popularity and development of IoT technologies, human activity recognition (HAR) using IoT devices (such as wearable sensors) enables various applications. Due to the complexity of activity recognition, most wearable HAR systems employ multiple homogeneous or heterogeneous sensors to capture rich information. However, the increase in the number of sensors and multichannel data introduces great challenges for HAR tasks. Selecting the appropriate sensor channels to balance computational complexity and recognition accuracy has become a major issue.

In this paper, we extend the sparse group Lasso mechanism to the HAR task and propose a **hybrid attention-based deep neural network** for multi-sensor pruning and feature selection, called **HAP-DNN**. The architecture enables feature selection on top of sensor pruning. HAP-DNN consists of three separable modules:  
1) a feature compression and reconstruction module for sensor feature fusion and recovery;  
2) a feature weighting module for computing sensor channel weights and feature importance;  
3) a classification module, which also acts as a filter-based feature selection approach.

Four public HAR datasets are used to validate the proposed architecture. Experimental results show that HAP-DNN achieves the best classification performance with the minimal number of preserved feature channels.

<div align="center">
  <img src="images/papers/paper1-10.png" alt="Figure" style="max-width: 600px; width: 100%; border-radius: 8px; margin-top: 1rem;">
</div>
