const brain = require('brain.js');
const fs = require('fs');

const useTrainedNet = false;

const input = {
	gender: 0.1,
	education: 0.3,
	maritalStatus: 0.2,
	age: 0.18
}

const config = {
	iterations: 100,
	errorThresh: 0.005,
	log: true,
	useTrainedNet: false
}

function createInstance(gender, education, maritalStatus, age, defaultRisk) {
		return {
			input: {
				gender: parseInt(gender)/10,
				education: parseInt(education)/10,
				maritalStatus: parseInt(maritalStatus)/10,
				age: parseInt(age)/10
			},
			output: {
				[defaultRisk]: 1
			}
		}
}

if(useTrainedNet){
	const trainedNet = require('./trained-net');

	console.log(trainedNet.anonymous(input));
} else {
	processNeuralNetwork();
}

function processNeuralNetwork() {
	const net = new brain.NeuralNetwork();

	net.train(parseData(), {log: config.log, iterations: config.iterations, errorThresh: config.errorThresh});

	console.log(net.run(input));

	fs.writeFileSync('trained-net.js', `module.exports = {anonymous}; ${ net.toFunction().toString() }`);
}

function parseData() {
	const dataSet = fs.readFileSync('./data.txt', 'utf8').split(";");
	let instances = [];

	dataSet.forEach((client) => {
		const clientData = client.split(",");
		instances.push(createInstance(clientData[0], clientData[1], clientData[2], clientData[3], clientData[4]));
	});

	return instances;
}