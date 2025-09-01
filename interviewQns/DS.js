function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
}

function twoSum1(arr, target) {
  console.log("hello");

  const map = new Map();
  for (let x in arr) {
    let diff = target - arr[x];
    console.log(map.has(diff));
    if (map.has(diff)) {
      console.log(map.get(diff));
    } else {
      map.set(arr[x], x);
    }
  }
}
console.log(twoSum1([1, 2, 3, 4, 5], 9));

function moveZeroes(nums) {
  lastNonZeroIndex = 0;
  for (let x in nums) {
    if (nums[x] != 0) {
      [nums[lastNonZeroIndex], nums[x]] = [nums[x], nums[lastNonZeroIndex]];
      console.log(x);
      lastNonZeroIndex++;
    }
  }
  return nums;
}
console.log(moveZeroes([2, 1, 0, 3, 12]));

function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n;
  let end = k - 1;
  let start = 0;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 10));
