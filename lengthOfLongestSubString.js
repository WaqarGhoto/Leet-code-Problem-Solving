/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let dict={};
    for(let i=0;i<s.length;i++){
        if(dict[s[i]]===undefined){
           dict[s[i]]=0; 
        }else{
            dict[s[i]]=dict[s[i]]+1;
        }
    }
    let repeatCharCount=0;
    Object.values(dict).map(value=>{
        repeatCharCount=repeatCharCount+value;
    });
    if(repeatCharCount===0){
        return s.length;
    }
    let windowLength =s.length-repeatCharCount;
    while(windowLength>1){
        for(let i=0;i<=s.length-windowLength;i++){
            let temDict = {};
            let isUnique=true;
            for(j=i;j<i+windowLength;j++){
                if(temDict[s[j]]===undefined){
                   temDict[s[j]]=0;
                }else{
                   isUnique=false;
                   break;
                }
            }
            if(isUnique){
                return windowLength;
            }
        }
        windowLength=windowLength-1;
    }
    return windowLength;
};