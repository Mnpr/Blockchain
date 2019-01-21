const Blockchain = require('./blockchain');

const testblockchain = new Blockchain();

testblockchain.createNewBlock(2345,'LADJ32408YDSR','DOSR6F98374RAOIU');
testblockchain.createNewTransaction('ALEXQ87EROQ3827', 100, 'BOBPFAIDR498R9P');


testblockchain.createNewTransaction('ALEXQ87EROQ3827', 100, 'BOBPFAIDR498R9P');
testblockchain.createNewTransaction('ALEXQ87EROQ3827', 34, 'BOBPFAIDR498R9P');
testblockchain.createNewTransaction('ALEXQ87EROQ3827', 160, 'BOBPFAIDR498R9P');
testblockchain.createNewTransaction('ALEXQ87EROQ3827', 45, 'BOBPFAIDR498R9P');

testblockchain.createNewBlock(1324, 'OSIDFJP934848', 'SDHF984YASO9DF');
console.log(testblockchain.chain[1]);