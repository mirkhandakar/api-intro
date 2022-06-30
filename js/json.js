const shop = {
    name: 'Prodip shop',
    address: 'Khilkhet',
    profit: 55000,
    products: ['laptop', 'mobile', 'tap', 'phone'],
    owner: {
        ownerName: 'Karim Mia',
        profession: 'Actor',
    },
    isExpensive: false
}

const shopStrigify = JSON.stringify(shop);
console.log(shop);
console.log(shopStrigify);
const convertShop = JSON.parse(shopStrigify);
console.log(convertShop);