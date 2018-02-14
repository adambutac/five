function combine(p, q) {
  var result = [];
  p.forEach(function(e, i) {
    result.push(e);
    if(i < q.length)
      result.push(q[i])
  });
  return result;
}

console.log(combine(['a', 'b', 'c'], [1, 2, 3]));