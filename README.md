# Javascript neural network
A neural network using Brain.js

## What does this do?
This application learns from a 30k entries dataset of loans and, after that, decides whether a given profile have a high or low default risk.

## How to use?
In the main.js file you can configure the parameters of the neural network as follows:

- iterations: Number of iterations over training examples. Usually, higher means slower to process but more accurate
- errorTresh: Error threshold to reach. If training error is greather than 0.4 after 20k iterations, it's possible that the data you're giving doesn't make sense
- log: Enable or disable logs
- useTrainedNet: Use previously trained network. You must run at least once without using trained network to generate a new one

Also, you can set your input values. Which are:

- gender: 0.1 = male / 0.2 = female
- education: 0.1 = graduate school / 0.2 = university / 0.3 = high school / 0.4 = others
- maritalStatus: 0.1 = married / 0.2 = single / 0.3 = others
- age: age/10