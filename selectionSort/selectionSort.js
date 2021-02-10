function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}

console.log(selectionSort([2, 5, 1, 7, 2, 87, 45, 89, 21, 34, 65, 21, 57, 38, 81, 1, 3, 4, 6, 2, 92, 31, 53, 424, 593, 420, 429847, 2432, 42310, 139344, 1, 2, 33, 35]));