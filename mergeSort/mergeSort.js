function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.trunc(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(arr1, arr2) {
    const arr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++;
        }
    }
    console.log(i, j);
    while (i < arr1.length) {
        arr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        arr.push(arr2[j]);
        j++;
    }
    return arr;
}
console.log(mergeSort([2, 5, 1, 7, 2, 87, 45, 89, 21, 34, 65, 21, 57, 38, 81, 1, 3, 4, 6, 2, 92, 31, 53, 424, 593, 420, 429847, 2432, 42310, 139344, 1, 2, 33, 35, 1211212212]));