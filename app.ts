//      1
const calculateTotal=(price: number, quantity: number, discount = 0): number => {
    if(!discount){
        return price * quantity
    }
    return (price * quantity ) * ((100 - discount ) / 100)
}

console.log(calculateTotal(8, 6, 10))

//      2
let id: string | number

const displayId = (id: string | number) => {
    if(typeof id === 'string'){
        return `ID: ${id}, Length: ${id.length}`
    }else{
        return `id: ${id * 10}`
    }
}
console.log(displayId('Bob'))
console.log(displayId(10))

//      3

interface Order {
    orderId: string,
    amount: number,
    status: 'pending' | 'shipped' | 'delivered'
}

let orders: Order[] =[
{
    orderId: '1',
    amount: 55,
    status: 'pending'
},
{
    orderId: '2',
    amount: 65,
    status: 'shipped'   
},
{
    orderId: '3',
    amount: 120,
    status: 'delivered'  
}
]

const filterOrdersByStatus =(orders:Order[], status: 'pending' | 'shipped' | 'delivered'):Order[] => {
    return orders.filter(order => order.status === status)
}
console.log(filterOrdersByStatus(orders,'pending'))
console.log(filterOrdersByStatus(orders,'shipped'))
console.log(filterOrdersByStatus(orders,'delivered'))


//      4

type productInfo = [string, number, number]

type inventory ={
    [key: string]: number
}


const updateStock =(inventory: inventory, productInfo: productInfo ): inventory => {
    const [name, price, stock] = productInfo
    console.log(`Product price: "${name}" makes up: ${price}$`)
    inventory[name] =stock
    return inventory 
}
let storeInventory: inventory ={
 'apple': 10,
}
const newProduct:  productInfo = ['apple', 1.2, 20]

console.log(updateStock(storeInventory, newProduct))
