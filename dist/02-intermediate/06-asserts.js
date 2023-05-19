"use strict";
function assertDisplayname(user) {
    if (!user.displayName)
        throw new Error("user has no displayName");
}
function logUserByDisplayName(user) {
    assertDisplayname(user);
    console.log(user.displayName.toUpperCase());
}
function isAnInternetOrder(order) {
    return !!order && 'email' in order;
    return order.email !== undefined;
}
function isATelephoneOrder(order) {
    return !!order && 'callerNumber' in order;
    return order.callerNumber !== undefined;
}
function makeOrder(order) {
    if (isAnInternetOrder(order)) {
        console.log(order.email);
    }
    else if (isATelephoneOrder(order)) {
        console.log(order.callerNumber);
    }
}
