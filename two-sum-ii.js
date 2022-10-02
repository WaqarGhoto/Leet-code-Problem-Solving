/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let dict={};
    for( let i=0;i<numbers.length;i++){
       let key=target-numbers[i];
       if(dict[key]!==undefined){
           return [dict[key]+1,i+1];
       }
       dict[numbers[i]]=i;
     }
    return []; // incase not found
};