"use strict";
// TALLEST MOUNTAIN
const mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];
function findNameOfTallestMountain(param) {
    let tallestMountain = mountains[0];
    mountains.forEach((item) => {
        if (item.height < tallestMountain.height) {
            tallestMountain = item;
        }
    });
    return tallestMountain;
}
// console.log(findNameOfTallestMountain(mountains));
let tallMountain = findNameOfTallestMountain(mountains);
const products = [
    { name: 'shirt', price: 20 },
    { name: 'jeans', price: 50 },
    { name: 'hat', price: 15 }
];
function calcAverageProductPrice(param) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += Product[i];
    }
    let average = total / products.length;
    return average;
}
let averagePrice = calcAverageProductPrice(products);
const inventory = [{
        product: {
            name: 'motor',
            price: 10.00
        },
        quantity: 10,
        product: {
            name: 'sensor',
            price: 12.50
        },
        quantity: 4,
        product: {
            name: 'LED',
            price: 1.00
        },
        quantity: 20,
    },
];
let sum = 0;
function calcInventoryValue(param) {
    let sum = 0;
    inventory.forEach(a => sum += a.product.price);
    return sum;
}
let totalValue = calcInventoryValue(inventory);
// console.log(calcAverageProductPrice(products));
