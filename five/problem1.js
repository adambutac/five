function sumForLoop(list) {
  var result = 0;
  for(var i=0; i<list.length; i++){
    result += list[i];
  }
  return result;
}

function sumWhileLoop(list) {
  var result = 0;
  while(list.length > 0) {
    result += list.shift();
  }
  return result;
}

function sumRecursion(list) {
  if(list.length === 0){
    return 0;
  }
  return list.shift() + sumRecursion(list);
}

function sum() {
  var list = [1,2,3];
  console.log(sumForLoop(list));
  console.log(sumWhileLoop(list));
  var list = [1,2,3];  
  console.log(sumRecursion(list));
}

sum();