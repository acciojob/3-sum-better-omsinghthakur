function threeSum(nums, target) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order
  let closestSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum; // Found an exact match, return the sum
      }
    }
  }

  return closestSum;
}

// Test the function
const nums = [-1, 2, 1, -4];
const target = 1;
const closestSum = threeSum(nums, target);
console.log("Closest sum:", closestSum);
