/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    if(board.length!==9){
        console.log("Board length is not valid");
        return false;
    }
    // loop 1 for Boxes 
    for(let b=0;b<3;b++){
        let dict = {'.':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0};
        let colsDot=[0,0,0];
        debugger;
        for(let i=0;i<3;i++){
            if(board[b*3+i].length!==9){
                return false;
            }
            let rowDot=0;
            for(let j=0;j<3;j++){
                if(dict[board[b*3+i][b*3+j]]!==undefined){
                    if(board[b*3+i][b*3+j]==='.'){
                        rowDot=rowDot+1;
                        colsDot[j]=colsDot[j]+1;
                        // if(rowDot>=3 || colsDot[j]>=3){
                        //     return false;
                        // }
                    }else if(dict[board[b*3+i][b*3+j]]>0){
                         return false;  
                    }
                    dict[board[b*3+i][b*3+j]]=dict[board[b*3+i][b*3+j]]+1;
                }else{
                    return false;
                }
                // if(rowDot>=3){
                //     return false;
                // }
            }
        }
    }
    
    return true;
};
