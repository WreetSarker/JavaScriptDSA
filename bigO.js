// 'use strict'
function add(n) {
    return Array.from({ length: n }, (i, j) => j + 1).reduce((i, j) => i + j);
}
const { performance } = require('perf_hooks');
let t1 = performance.now();
add(1000);
let t2 = performance.now();
console.log(`The operation took ${(t2 - t1) / 1000} seconds`);