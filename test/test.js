var nx = require('next-js-core2');
require('../src/next-prototype-chain');

test('nx.prototypeChain', function() {
  var v1 = { name: 'fei' };
  var v2 = [];
  var v3 = function() {};
  var v3 = null;
  var v4 = '';
  var v5 = false;
  var v6 = undefined;

  var rs1 = nx.prototypeChain(v1);
  var rs2 = nx.prototypeChain(v2);
  var rs3 = nx.prototypeChain(v3);
  var rs4 = nx.prototypeChain(v4);
  var rs5 = nx.prototypeChain(v5);
  var rs6 = nx.prototypeChain(v6);

  console.log(rs1,rs2,rs3);

});
