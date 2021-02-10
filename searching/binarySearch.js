function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (left <= right) {
        if (arr[mid] === val) {
            return mid;
        } else if (arr[mid] > val) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2);
    }

    return -1;
}

console.log(binarySearch([1, 5, 10, 15, 21, 53, 87], 15));