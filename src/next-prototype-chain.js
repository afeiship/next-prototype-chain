(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.prototypeChain = function(inTarget) {
    if (inTarget == null) return [];
    var chain = [];
    var proto = Object.getPrototypeOf(inTarget);
    do {
      chain.push(proto);
      proto = Object.getPrototypeOf(proto);
    } while (proto !== null);
    return chain;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.prototypeChain;
  }
})();
