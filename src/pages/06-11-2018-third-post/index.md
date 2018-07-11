---
path: "/image-recognition-with-cnn"
date: "2018-07-08"
title: "Image recognition with CNN"
---
<br />
<br />

![image](http://neuralnetworksanddeeplearning.com/images/tikz41.png)

On this post I think I'll do something a little different; Due to all the recent off-season drama (LeBron to LA,
Lance Stephenson to LA, Boogie to GS and so on....), I think it's a good time to take a brief brief break from 
the basketball world and focus on something we can all enjoy......kitties and puppies!!! I've been really 
interested in CNN (convolutional neural network) and image recognition for a while now and I really wanted to make 
a CNN of my own to get a better understanding of how CNNs work. I decided to make a CNN for image recognition to 
differentiate between kitties and puppies! 
 
Turns out with the help of the extremely powerful [fast.ai](http://www.fast.ai/) library I was able 
to create a fully connected CNN that had an accuracy of 98.7% with less than 100 lines of code! I was super 
excited and want to share my experience here. They also have great free online courses that allow you to follow 
through examples of implementing your own deep learning solutions using their fast.ai library! Let me do a quick
walk through of how I did this. 


<h4> SETTING UP </h4>

Image classification and CNN projects usually requires a NVIDIA GPU because that's the only GPU that supports 
 [CUDA](https://en.wikipedia.org/wiki/CUDA) I'm doing this project on a jupyter notebook that is on a remote  
 server provided by [paperspace](https://www.paperspace.com/), each machine is that is pre-installed with all
  the fast ai data and library so it's a great way to get started with your personal projects. 
  
<h4> LOADING THE DATA </h4>

The fast.ai library we use assumes the following folder structure. 

```aidl
|-- train
    |-- cats
    |-- dogs
|-- valid
    |-- cats
    |-- dogs

```

where there's a training set and a validation set and each set has a subfolder of the categories to be classified 
in this case `cats` and `dogs` 

so first we import all the relevant libraries and set the PATH to the data files. 

![alt](https://i.imgur.com/D4dBhXI.png)

then 

