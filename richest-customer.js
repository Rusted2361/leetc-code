/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    // let account_sum=[]
    // let largest = 0;

    // for (let i = 0; i < accounts.length;i++){
    //    let account = accounts[i].reduce((partialSum, a) => partialSum + a, 0)
    //     account_sum.push(account)
    //      if (account_sum[i] > largest ) {
    //     largest = account_sum[i];
    //     }
        
    //     console.log(largest) 
    // }
    // return largest
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        let wealth = accounts[i].reduce((partialSum, a) => partialSum + a, 0);
        maxWealth = Math.max(maxWealth, wealth);
    }

    return maxWealth;
};