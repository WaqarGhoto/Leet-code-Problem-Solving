/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let profit=0;
    let minPrice=prices[0];
    let maxProfit =0;
    let firstTime= true;
    for(let i=0;i<prices.length;i++){
        if((prices[i]<=minPrice && firstTime) || (prices[i]<minPrice && !firstTime)){
            firstTime=false;
            for(let j=i+1;j<prices.length;j++){
                maxProfit=prices[j]-prices[i]>maxProfit?prices[j]-prices[i]:maxProfit;  
            }
            minPrice=prices[i];
        }
    }
    return maxProfit;
};