function maxSum(arr) {
    let currMax = 0, max = 0;

    for (let i = 0; i < arr.length; i++) {
        currMax = Math.max(0, currMax + arr[i]);
        max = Math.max(currMax, max);
    }
    return max;
}


console.log(maxSum([1, 2, 3, 7, 1, 2, 6, -8, 3, 1, 6, 9, 0, 4, 3, 6]));