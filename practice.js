let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && !(i % 25 === 0)) {
        sum += i;
    }
}
console.log(sum);