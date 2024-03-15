var reduce = function(nums, fn, init) {
   for (let i = 0; i <= nums.length; i++){
      init = fn(nums[0], nums[i])
      return init
   }
};
console.log(reduce([1, 2,3,4]))
