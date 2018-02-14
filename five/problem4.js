function largest(list) {
  list.sort(function(a, b) {
    let c = a + '';
    c = +c.split('')[0];
    let d = b + '';
    d = +d.split('')[0];
    return (c < d);
  });
  return list.join('');
}

console.log(largest([50, 2, 1, 9, 800]));