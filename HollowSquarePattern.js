/** 

2. Hollow Square Pattern

*****
*   *
*   *
*   *
*****

*/


function generatePattern(n){
  let pattern='';
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      if(i!=0 && i != n-1 && j!=0 && j != n-1)
        pattern+=' ';
      else pattern+='*';
    }
    pattern+='\n';
  }
  return pattern;
}

var pattern  = generatePattern(5);
console.log(pattern);
