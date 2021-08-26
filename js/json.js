// javascript object notation
// JSON
const user = {name: 'Rasel', id: 11, job: 'web developer'}
const userJson = JSON.stringify(user)
// console.log(user)
// console.log(userJson)

const shop = {
    name: 'RA Tech',
    id: 13,
    profit: 15000,
    products: ['laptop', 'phone', 'watch'],
    onar: {
        name: 'rasel', profation: 'programming'
    },
    isExpensive: false
}

const shopStringify = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringify);
const converd = JSON.parse(shopStringify)
console.log(converd.onar)