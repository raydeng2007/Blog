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


<h2> SETTING UP </h2>

Image classification and CNN projects usually requires a NVIDIA GPU because that's the only GPU that supports 
 [CUDA](https://en.wikipedia.org/wiki/CUDA) I'm doing this project on a jupyter notebook that is on a remote  
 server provided by [paperspace](https://www.paperspace.com/), each machine is that is pre-installed with all
  the fast ai data and library so it's a great way to get started with your personal projects. 
  
<h2> LOADING THE DATA </h2>

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
in this case `cats`  and  `dogs` 

so first we import all the relevant libraries and set the PATH to the data files. 

![alt](https://i.imgur.com/D4dBhXI.png)

then we want to take a quick look at our dataset just to make sure we indeed have the correct data. 

![alt](https://i.imgur.com/5aVCJte.png)

maybe even open an image of a dog to see what the pictures actually look like. 

![alt](https://i.imgur.com/mJrri1v.png)

<h2>CHOOSING THE LEARNING RATE</h2>

One of the most challenging parameters to find in training a neural network is the learning rate, which is the
number that determines how much to shift the weights of the neural network. If we shift the weight too much, we 
it will end up diverging instead of converging, however if we choose it to be too low, we would end up updating
the weights too slow and the process would be too slow. 

So how do we choose the learning rate? There are several ways researchers to do it but the way that I have done 
is using the fast.ai library function  `learn.lr_find()`  where  `learn`  contains all the information of our neural 
network, such as what architecture and the data. Under the roof what it's doing is that it starts the learning
rate at a very small number and increases it until the loss (the error from learning) stops decreasing. We are 
able to see what the process looks like visually because of in the  `learn`  object there's an attribute called
`sched`  which is the learning rate scheduler that has some nice plotting functions like `learn.sched.plot_lr()`,
 we can compare the learning rate and the loss using this function  `learn.sched.plot()`. This yields a plot like
 this. 
 
 ![alt](https://i.imgur.com/Aqnl16o.png)
 
 we want to choose a learning rate where the lost isn't at the lowest but somewhere a little before that.A good 
 number to choose is around 10<sup>-2</sup>. 
 
 <h2>TRAINING THE MODEL</h2>
 
 Now we have the learning rate, the fast.ai library makes it very easy to train a neural network. It only requires 
 3 lines of code! 
<br>

![alt](https://i.imgur.com/flq3PQX.png)

that was all the code that was necessary to train a CNN. 

first line was to get the data from the `PATH` as well as transform it according to the architecture and bach size
 which we set to 224. 

second line is to get to set the precompute activation layer to true so we don't have to retrain the whole dataset all 
over again. There is actually a lot more to learn about precompute activation layers and why it is important or when to 
set or unset this parameter but I myself will not go more in depth on this topic here. 

third line is where we use the learning rate we choose before --0.01, and the number 3 is just the number of epochs or 
the number of times the CNN goes through the whole image set.

and then voilà, after a few minutes we have a trained neural network! How do we know the performance or the error margin 
of each epoch? Fast.ai actually handles it quite eloquently, it will display a box like the one below showing you the 
important statistics of each epoch. 

![alt](https://i.imgur.com/FGW36l5.png)

as we can see there's three numbers on each epoch, the first number is the value of loss function for the training set, 
so it measures how good or bad the neural is performing during the training set, as we can see after each epoch the loss 
function is decreasing which is the expected 'learning' behaviour. The second value is the loss function of the validation
set, the last number is probably the most important to us, it represents the accuracy of the prediction of the model. As the
data reflects, we have been getting very consistently good predictions! 

<h2>Ending note</h2>

This is the basic steps of what you need to do to train a CNN, there are many MANY more steps to improve and to go into
details about how each step works under the hood, but I'm not going to go into too too much detail. If this post did indeed
trigger your sense of curiosity of CNN and deep learning in general, I personally strongly advice you to take the fast.ai 
or read up on their library documentations. I hope to do a similar project like this but to train the neural network to 
recognize between crying lebron and crying jordan in the distance future just because why not. But we'll save that for 
another time I guess. The notebook containing my steps as well as the data files are available on my [github](https://github.com/raydeng2007), 
feel free to clone and to recreate them if you wish! :) 
 
 

