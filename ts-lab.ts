
// TALLEST MOUNTAIN

interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];

function findNameOfTallestMountain(param: Mountain[]): string {
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
// console.log(tallestMountain)

// PRODUCTS
interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    { name: 'shirt', price: 20 },
    { name: 'jeans', price: 50 },
    { name: 'hat', price: 15 }
];

function calcAverageProductPrice(param: Product[]): number {
    let total = 0;
    for(let i = 0; i < products.length; i++) {
    total += Product[i];
    }
    let average = total / products.length;
    return average;
}

let averagePrice = calcAverageProductPrice(products);
// console.log(calcAverageProductPrice(products));


// INVENTORY

interface InventoryItem {
    product: {
        name: string,
        price: number
    },
    quantity: number,
}

const inventory: InventoryItem[] = [{
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
function calcInventoryValue(param: InventoryItem[]): number {
    let sum: number = 0;
    inventory.forEach(a => sum += a.product.price);
    return sum;
  }

let totalValue = calcInventoryValue(inventory);
// console.log(calcAverageProductPrice(products));
