/** 

Hollow Triangle Star Pattern

*
**
* *
*  *
*   *
*    *
*     *
********

*/


function generatePattern(n){
  let pattern='';
  for(let i=1; i<=n; i++){
     for(let j=1; j<=i; j++){
       if((i<3 || i==n)||(j==1 ||j==i))
          pattern+='*';
       else {
         pattern+=' '
       }
    }   
    pattern+='\n';
  }
  return pattern;
}

var pattern  = generatePattern(8);
console.log(pattern);
