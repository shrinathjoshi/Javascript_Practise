let obj=  {
  a: 1,
  b: {
    c: 2,
    d: -3,
    e: {
      f: {
        g: -4,
      },
    },
    h: {
      i: 5,
      j: 6,
    },
  },
  c:{
  }
}

const filterBy = (n)=> n>=-3

const deepFilter = (input, filter) => { 
  for(const key in input){
    let value =  input[key];
    if(JSON.stringify(value) === '{}')
      delete input[key];
    
    if(typeof value === 'object'){
      deepFilter(value, filter)
    }else if(filter(value) === false)
      delete input[key];
  }
  return input;
}
let result = deepFilter(obj,filterBy)
console.log(result);
