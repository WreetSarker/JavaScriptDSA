function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = partition(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

function partition(arr, start = 0, end = arr.length + 1) {
    let pivot = arr[start];
    let currentIdx = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            currentIdx++;
            [arr[currentIdx], arr[i]] = [arr[i], arr[currentIdx]];
        }
    }
    [arr[currentIdx], arr[start]] = [arr[start], arr[currentIdx]];
    return currentIdx;
}
console.log(quickSort([2, 5, 1, 7, 2, 87, 45, 89, 21, 34, 65, 21, 57, 38, 81, 1, 3, 4, 6, 2, 92, 31, 53, 424, 593, 420, 429847, 2432, 42310, 139344, 1, 2, 33, 35, 1211212212, 12, 1433534525, 1313, 131, 146, 96, 2, 35, 73, 12, 5353535, 7573, 1346, 24341, 75786, 13125, 53, 131, 53536, 4642, 13186, 5789, 869464]));