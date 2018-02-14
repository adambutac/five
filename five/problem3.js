function fibonnaci(list, count) {
  if(count === 0){
    return list;
  }
  list.push(list[list.length - 2] + list[list.length - 1]);
  return fibonnaci(list, count - 1);
}

console.log(fibonnaci([0,1], 100));