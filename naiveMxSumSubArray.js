'use strict'
function sumArray(arr, sub) {
    if (arr.length < sub) return null;
    let max = -Infinity;
    for (let i = 0; i < arr.length - sub + 1; i++) {
        let temp = 0;
        for (let j = 0; j < sub; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }

    return max;
}

console.log(sumArray([1, 2, 3, 4, 5, 6, 1, 2, 3, 4], 3));