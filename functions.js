"use strict";


// 1. isHometown

function isHometown(town) {
    if (town === "San Francisco") {
        return true;
    } 
  }
// Define your function here


// 2. getFullName

function getFullName(first_name, last_name) {
    const str = `${first_name} ${last_name}`;
    return str;
}   


// 3. calculateTotal
function calculateTotal(base_price, state, tax=0.05) {
    const subtotal = base_price *(1+tax);
    let fee=0;
    if (state==='CA') fee=0.03*subtotal;
    else if (state === 'PA') fee = 2;
    else if (state ==='MA') {
        if (base_price <= 100) fee=1;
        else fee=3;
    }
    return subtotal + fee;
}


