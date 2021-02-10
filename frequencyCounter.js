'use strict'

function isSame(arr1, arr2) {
    const frequency1 = {};
    const frequency2 = {};

    for (const val of arr1) {
        frequency1[val] = frequency1[val] ? frequency1[val] += 1 : 1;
    }
    for (const val of arr2) {
        frequency2[val] = frequency2[val] ? frequency2[val] += 1 : 1;
    }

    for (let key in frequency1) {
        if (!(key ** 2 in frequency2)) {
            return false;
        }
        if (frequency1[key] !== frequency2[key ** 2]) {
            return false;
        }
    }
    return true;
}
console.log(isSame([1, 2, 3], [1, 9, 4]));
