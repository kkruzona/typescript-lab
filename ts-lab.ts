
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
    let tallestMountain = Mountain[0];
    Mountain.forEach((item) => {
      if (item.height < tallestMountain.height) {
        tallestMountain = item;
      }
    });
    return tallestMountain;
}
// console.log(findNameOfTallestMountain(mountains));

let tallestMountain = findNameOfTallestMountain(mountains)
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
    for(let i = 0; i < Product.length; i++) {
    total += Product[i];
    }
    let average = total / Product.length;
    return average;
}

let averagePrice = calcAverageProductPrice(products)
// console.log(calcAverageProductPrice(products));


// INVENTORY

interface InventoryItem {
    product: products;
    quantity: number;
}

const inventory: InventoryItem[] = [
    { name: 'motor', price: 10.00, quantity: 10 },
    { name: 'sensor', price: 12.50, quantity: 4 },
    { name: 'LED', price: 1.00, quantity: 20 }
];


function calcInventoryValue(param: InventoryItem[]): number {
    for (let inventory of InventoryItem)
        {
            if (num > maxSoFar)
            {
                maxSoFar = num;
            }
        }
    return maxSoFar;
}

let totalValue = calcInventoryValue(inventory)
// console.log(calcAverageProductPrice(products));
