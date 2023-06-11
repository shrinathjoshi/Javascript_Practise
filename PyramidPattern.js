/** 

Pyramid Pattern

           *
          ***
         *****
        *******
       *********
      ***********
     *************
    ***************
   *****************
  *******************
 *********************
***********************

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
  return pattern;
}

var pattern  = generatePattern(12);
console.log(pattern);
