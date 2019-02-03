const Blockchain = require('./blockchain');
const testblockchain = new Blockchain();

// New block
testblockchain.createNewBlock(2345,'PREV32408YDSR','HASH6F98374RAOIU');

// New transaction on Pending
testblockchain.createNewTransaction('ALEXQ87EROQ3827', 100, 'BOBPFAIDR498R9P');
testblockchain.createNewTransaction('ALEXQ87FASLKDFJ', 100, 'BOBSDFEAWE5DSGS');
testblockchain.createNewTransaction('ALEXDSR94R9SDFK', 349, 'BOBERRTSDFGRSGD');

// Minined block addition to the chain
testblockchain.createNewBlock(1324, 'PREVFJP934848', 'HASH984YASO9DF');
// console.log(testblockchain.chain);


// Block hash generation 
const previousBlockHash = 'JFSA7D0R4YEWROHASDKF';
const currentBlockData = [
    {
        sender:'ALEXFL94ER8TIERUE',
        amount:100,
        receiver:'BOBDSIORPEOWIETSD'
    },
    {
        sender:'ALEXSDLFJEOIJFEDJ',
        amount:10,
        receiver:'BOBDSIORPEOWIETSD'
    },
    {
        sender:'ALEXSDKFJOEI398RD',
        amount:1,
        receiver:'BOBDSIORPEOWIETSD'
    }
];

const nonce = 1234;
console.log(testblockchain.hashBlock(previousBlockHash, currentBlockData, nonce));


