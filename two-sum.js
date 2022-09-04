/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let dict={};
    for( let i=0;i<nums.length;i++){
        let key=target-nums[i];
        if(dict[key]!==undefined){
            return [dict[key],i];
        }
        dict[nums[i]]=i;
    }
     return []; // incase not found 
 };