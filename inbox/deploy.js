const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3'); //constructor to construct web3-instances
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'spike film jealous dawn lamp blanket exact claw wise laptop mention churn',
    'https://rinkeby.infura.io/v3/eb43779f5b8649faaf0b920115d3a653'
);

const web3 = new Web3(provider);

