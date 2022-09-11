/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    // Initial test cases 
    if(strs===null || strs===undefined || !strs.length){
        return "";
    }
    // Just pick the First String as prefix 
    let prefix = strs[0];
    debugger;
    for(let i=1;i<prefix.length;i++){
        debugger;
        if(prefix!==strs[i]){
            // Not matched 
        
           //prefix = prefix.length <= strs[i].length ? prefix :strs[i];
           let flag=true;
           while(flag){
               if(strs[i].substring(0,prefix.length)!==prefix){
                debugger
                  prefix=prefix.slice(0, -1);
               }
               else{
                   flag=false;
                   break;
               }
           }
           
        }
    }
    console.log(prefix);
    return prefix;
};

longestCommonPrefix(["reflower","flow","flight"]);