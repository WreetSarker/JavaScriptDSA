function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

console.log(linearSearch([1, 2, 4, 82, 31, 64, 86, 24, 56], 561));