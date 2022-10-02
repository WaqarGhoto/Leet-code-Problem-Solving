/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let max=0;
    let i=0;
    let j=height.length-1;
    let width=height.length-1;
    while(i<j){
        let area; 
        if(height[i]>height[j]){
            area = height[j] *width;
            j=j-1;
        }else{
            area = height[i] *width;
            i=i+1;
        }
        width=width-1;
        max = max>area ? max:area;
    }
    return max;
};