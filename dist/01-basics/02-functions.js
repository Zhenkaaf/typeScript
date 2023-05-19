"use strict";
function sum(a, b) {
    return a + b;
}
;
const sum2 = (a, b) => a + b;
const sum3 = function (a, b) {
    return a + b;
};
sum(2, 4);
function log(name, userId) {
    console.log('Helllo', name, 'with ID', userId || 'anonym');
}
;
log('Kris', '123');
function crash() {
    throw new Error('crash');
}
;
function average(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
;
function slice(str, start, end) {
    let newStr = '';
    let lastIndex;
    if (end) {
        lastIndex = end > str.length ? str.length : end;
    }
    else {
        lastIndex = str.length;
    }
    for (let i = start; i < lastIndex; i++) {
        newStr += str[i];
    }
    return newStr;
}
