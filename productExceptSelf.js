/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let allProduct=1;
    let answer=[1];
    debugger;
    for(let i=1;i<nums.length;i++){
        allProduct=allProduct*nums[i-1];
        answer.push(allProduct);
    }
    allProduct=1;
    for(let i=answer.length-2;i>=0;i--){
        allProduct=allProduct*nums[i+1];
        answer[i]=answer[i]*allProduct;
    }
    
    console.log(answer);
    return answer;
};

productExceptSelf([1,2,3,4]);
