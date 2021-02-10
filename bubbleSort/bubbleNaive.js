function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([2, 5, 1, 7, 2, 87, 45, 89, 21, 34, 65, 21, 57, 38, 81, 1, 3, 4, 6, 2, 92, 31, 53, 424, 593, 420, 429847, 2432, 42310, 139344, 1, 2, 33, 35]));