
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
      if (item.height > tallestMountain.height) { //you only want to replace the tallesMountain if the current item is taller
        tallestMountain = item;
      }
    });
    return tallestMountain.name;
}
//this one is giving an error becasue you said it should return a string but its returing type Mountain
//if you set it to return tallestMountain.name then you will get rid of the type error. 
let tallMountain = findNameOfTallestMountain(mountains);

// console.log(findNameOfTallestMountain(mountains));
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
    //"param" is actually the name of this local variable for this function so you need to reference that,
    //you cant reference a type as a value. 
    let total = 0;
    for(let i = 0; i < products.length; i++) {
    total += param[i].price; //you need to add the .price otherwise its trying to add the whole object to the total which it cant do
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

const inventory: InventoryItem[] = [
    {
        product:{
            name: 'Motor',
            price: 10.00
        },
        quantity: 10
    },
    {
        product:{
            name: 'Sensor',
            price: 12.50
        },
        quantity: 4
    },
    {
        product:{
            name: 'LED',
            price: 1.00
        },
        quantity: 20
    }
  ];

let sum = 0;
function calcInventoryValue(param: InventoryItem[]): number { //again, youve named your param "param" so you need to reference that as the list variable. 
//you reference the inventory variable directly in the code but the param is so any list with this structure can be entered and find the total value
    let sum: number = 0;
    param.forEach(a => sum += a.product.price * a.quantity);
    //with this one you need to multiply each items quantity by the price 
    return sum;
  }

let totalValue = calcInventoryValue(inventory);
// console.log(calcAverageProductPrice(products));
