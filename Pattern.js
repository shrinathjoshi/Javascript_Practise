/** 


Square Star Pattern in Javascript

*****
*****
*****
*****
*****

*/




function generatePattern(n){
  let pattern='';
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      pattern+='*'
    }
    pattern+='\n';
  }
  return pattern;
}

var pattern  = generatePattern(5);
console.log(pattern);


