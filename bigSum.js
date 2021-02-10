function add(a, b) {
    // console.log(a, b);
    a = a.split("").reverse();
    b = b.split("").reverse();

    var sum = [];
    var remainder = 0;
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
        var x = parseInt(a[i]) ? parseInt(a[i]) : 0;
        var y = parseInt(b[i]) ? parseInt(b[i]) : 0;
        var digit = (x + y + remainder) % 10;
        remainder = Math.floor((x + y + remainder) / 10);
        sum.unshift(digit);
    }
    if (remainder) { sum.unshift(remainder) }

    return sum.join("");
}

console.log(add('900030035530000000000000000000000535353455300000000000003545', '90424092424024242042049402042049409420000000000000024240000000000000000'));