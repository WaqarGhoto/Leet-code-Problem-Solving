/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let dict={};
    
    for(let i=0;i<nums.length;i++){
        if(dict[nums[i]]!==undefined){
            dict[nums[i]]=dict[nums[i]]+1;
        }else{
            dict[nums[i]]=1;
        }
    }
    
    let keysArray =[];
    let min = null;
    Object.keys(dict).map(key=>{
        if(keysArray.length<k){
           keysArray.push(key);
        }else{
            for(let i=0;i<keysArray.length;i++){
                if(dict[keysArray[i]]<dict[key]){
                   keysArray[i] = key;
                    break;
                }
            }
        }
    });
    Object.keys(dict).map(key=>{
            for(let i=0;i<keysArray.length;i++){
                if(!keysArray.includes(key)){
                   if(dict[keysArray[i]]<dict[key]){
                     keysArray[i] = key;
                     break;
                   } 
                }
                
            }
    });
    
    console.log(dict);
    return keysArray;
};