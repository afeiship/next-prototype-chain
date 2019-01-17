var nx = require('next-js-core2');
require('../src/next-prototype-chain');

test('nx.prototypeChain', function() {
  var v1 = { name: 'fei' };
  var v2 = [];
  var v3 = function() {};

  var rs1 = nx.prototypeChain(v1);
  var rs2 = nx.prototypeChain(v2);
  var rs3 = nx.prototypeChain(v3);

  console.log(rs1,rs2,rs3);


});
