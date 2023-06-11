/** 

Hollow Pyramid Star Pattern
    *
   * *
  *   *
 *     *
*********

*/


function generatePattern(n){
  let pattern='';
  for(let i=1; i<=n; i++){
    for(let j =1; j<=n-i; j++){
      pattern += ' ';
    }
    for(let j=1; j<i; j++){
      if(j==1 || i==n)
        pattern += '*';
      else
        pattern += ' ';
    }
    for(let j=1; j<=i; j++){
      if(j==i || i==n)
       pattern += '*';
      else
        pattern += ' ';
    }   
    pattern+='\n';
  }
  return pattern;
}

var pattern  = generatePattern(12);
console.log(pattern);
