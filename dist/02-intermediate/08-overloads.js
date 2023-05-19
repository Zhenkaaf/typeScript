"use strict";
function add(a, b) {
    return a + b;
}
add(1, 1);
function asyncSum(a, b, cb) {
    const result = a + b;
    if (cb) {
        return cb(result);
    }
    return Promise.resolve(result);
}
asyncSum(1, 1);
function head(value) {
    return value[0];
}
const he = head([true, false, true, true]);
