const assert = require('assert');
const ganache = require('ganache-cli'); //provider for communication with desired ethereum-network
const Web3 = require('web3'); //constructor to construct web3-instances

const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require('../compile');

let accountList;
let inbox; 

beforeEach(async () => {
    
    accountList = await web3.eth.getAccounts();

    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ from: accountList[0], gas: '1000000' });

});


describe('Inbox', () => {
    it('deploys a contract', () => {
      assert.ok(inbox.options.address);
    });

    it('has some default value', async () => {
        const message = await inbox.methods.getMessage().call();
        assert.equal(message, 'Hi there!');
    });

    it('can change the message', async () => {
        await inbox.methods.setMessage('bye').send({ from: accountList[0] });
        const message = await inbox.methods.getMessage().call();
        assert.equal(message, 'bye');
    });
  });
  


/*
class Car {

    park() {
        return 'stopped';
    }
    drive() {
        return 'vroom';
    }
}

describe('Car', () => {
    it('can park', () => {
        const car = new Car();
        assert.equal(car.park(), 'stopped');
    });
});
*/