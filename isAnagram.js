'use strict'
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const obj = {};
    for (const val of str1) {
        obj[val] = obj[val] ? obj[val] += 1 : 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let val = str2[i];
        if (!(obj[val])) {
            return false;
        } else {
            obj[val] -= 1;
        }
    }

    return true;
}

console.log(isAnagram('anagramsaa', 'naagramsbb'));