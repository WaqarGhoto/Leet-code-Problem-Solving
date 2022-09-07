/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    // keep the Dictionary 
    let dict = {};
    // it will take n time.
    for(let str of strs){
        const key = getTotalAciiValue(str);
        if(dict[key]!==undefined && dict[key].length===str.length){
            dict[key].strs.push(str);
        }else{
            dict[key]={length:str.length,strs:[str]};
        }
    }
    let groups = Object.values(dict).map(value=>{
        return value.strs;
    });
    return groups;
    
    
};

// this function will take m time m is the length of a string
var getTotalAciiValue = function (str){
    let value=1;
    for(let i=0;i<str.length;i++){
        value=value*str.charCodeAt(i);
    }
    return value;
}