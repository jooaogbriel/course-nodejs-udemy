var expect = function(val) {
   const obj = {
       toBe:  (val) => {
           if(val === val){
               return true
           }
           console.log(toBe(5))
       },
       notToBe:  (val) => {
           if(val === val){
               return "Not Equal"
           }
       },
   }
   return obj
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"