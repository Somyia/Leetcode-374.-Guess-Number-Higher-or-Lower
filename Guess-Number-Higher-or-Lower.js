/**
* Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

    

var guessNumber = function(n) {
    let i=1;
    let j=n;
    let mid;
    while(i<=j){
     mid =Math.floor((i+j)/2);
    let val = guess(mid);
    if(val==0){
        return mid;
    } else if(val==-1){
        j=mid-1;
    } else if(val==1) {
        i=mid+1;
    
        }
   }
    return mid;
   
};
