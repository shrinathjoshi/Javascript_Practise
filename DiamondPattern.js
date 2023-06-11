/** 

Diamond Pattern

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/


function generatePattern(n){
  let pattern='';
  for(let i=1; i<=n; i++){
    for(let j =1; j<=n-i; j++){
      pattern += ' ';
    }
    for(let j=1; j<i; j++){
      pattern += '*';
    }
    for(let j=1; j<=i; j++){
       pattern += '*';
    }   
    pattern+='\n';
  }

  for(let i=n-1; i>=0; i--){
    for(let j=1; j<=n-i ;j++){
      pattern+=' ';
    }
    for(let j=1; j<=2*(i)-1; j++)
      pattern += '*';
    pattern+='\n';
  }
  return pattern;
}

var pattern  = generatePattern(10);
console.log(pattern);
