const path = require('path');
const fs = require('fs'); //file reader
const solc = require('solc') //solidity compiler

//specifies memory address of contract
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
//raw source code of contract
const source = fs.readFileSync(inboxPath, 'utf-8');

module.exports = solc.compile(source, 1).contracts[':Inbox']; //extracting object that contains "abi" and "bytecode" for contract


