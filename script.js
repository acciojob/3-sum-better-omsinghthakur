function threeSum (nums, target) {  
  nums.sort((a, b) => a - b);
	let ans=nums[0]+nums[1]+nums[2]; 
  for (let i = 0; i < nums.length - 2; i++) { 
    let left = i + 1;
    let right = nums.length - 1; 
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];  
      if (sum < target) {
        left++;
      } else {
        right--;
	  } 
		   if (Math.abs(target-sum) < Math.abs(target-ans)) { 
        ans= sum; 
      } 
    }
  } 
  return ans;
};  
