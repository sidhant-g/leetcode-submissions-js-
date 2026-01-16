/**
 * @param {number[]} nums
 * @return {number}
 */
 //using binary search
var singleNonDuplicate = function(nums) {
    let n = nums.length;
    let low = 0;
    let high = n-1;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(mid % 2 !== 0){
            if(nums[mid-1] == nums[mid]) low = mid+1;
           else if(nums[mid] == nums[mid+1]) high = mid-1;
           else return nums[mid]
        } else{
             if(nums[mid-1] == nums[mid]) high = mid-1;
           else if(nums[mid] == nums[mid+1]) low = mid+1;
           else return nums[mid]
        }
    }
};




 //using linear search
// var singleNonDuplicate = function(nums) {
//     for(let i = 0; i < nums.length; i = i+2){
//         if(nums[i] == nums[i+1]){

//         } else{
//             return nums[i];
//         }
//     }
// };

//JAVA Linear Search
class Solution {
    public int singleNonDuplicate(int[] nums) {
        int n = nums.length;
        int result = 0;
        for (int i = 0 ; i<n-1; i=i+2){
            if (nums[i] == nums[i+1]){
                continue;
            }
            if (nums[i] != nums[i+1]){
                return nums[i] ;
            }
        }
        return nums[n-1];  // returns the last elem.
    }
}
