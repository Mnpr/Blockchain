const sha256 = require('sha256');

function Blockchain(){
    this.chain =[];
    this.pendingTransaction =[];
}

Blockchain.prototype.createNewBlock = function(nonce, hashOfPreviousBlock, hash){
    const newBlock = {
        index : this.chain.length+1,
        timestamp: Date.now(),
        transaction: this.pendingTransaction,
        nonce: nonce,
        hash: hash,
        hashOfPreviousBlock : hashOfPreviousBlock
    };
    this.pendingTransaction = [];
    this.chain.push(newBlock);

    return newBlock;
}

Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length-1];
}

Blockchain.prototype.createNewTransaction = function(sender,amount, receiver){
    const newTransaction ={
        sender: sender,
        amount: amount,
        receiver : receiver
    };
    this.pendingTransaction.push(newTransaction);
    return this.getLastBlock()['index'] +1;
}

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce ){
    const blockString = previousBlockHash + toString(nonce) + JSON.stringify(currentBlockData);
    const hash = sha256(blockString);
    return hash;
}

module.exports = Blockchain;
