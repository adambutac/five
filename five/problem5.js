function solution1(list, ops) {
  for(let a=0; a<ops.length; a++){
    for(let b=0; b<ops.length; b++){
      for(let c=0; c<ops.length; c++){
        for(let d=0; d<ops.length; d++){
          for(let e=0; e<ops.length; e++){
            for(let f=0; f<ops.length; f++){
              for(let g=0; g<ops.length; g++){
                for(let h=0; h<ops.length; h++){
                  let eq = [
                    list[0],
                    ops[a],
                    list[1],
                    ops[b],
                    list[2],
                    ops[c],
                    list[3],
                    ops[d],
                    list[4],
                    ops[e],
                    list[5],
                    ops[f],
                    list[6],
                    ops[g],
                    list[7],
                    ops[h],
                    list[8]];
                  if(eval(eq.join('')) === 100) {
                    console.log(eq.join(''));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function solution2(g, s, ops, nums){
  if(s.length === nums.length - 1){
    let result = s.map(function(op, i){
      return nums[i] + op;
    }).join('').concat(nums[nums.length - 1]);
    if(eval(result) === 100) {
      g.push(result);
    }
  } else {
    ops.forEach(function(op) {
      let n = [op];
      solution2(g, n.concat(s), ops, nums);
    });
  }
}

solution1([1,2,3,4,5,6,7,8,9], ['+', '-', '']);

const g = [];
solution2(g, [], ['+', '-', ''], [1,2,3,4,5,6,7,8,9]);
console.log(g);
