// Create CartItem type, cart array, and calculateTotal function
type CartItem = {
  productId: number,
  name: string,
  price: number,
  quantity: number
}
// Your code here 👇
const banana: CartItem = {
  productId: 1,
  name: "banana",
  price: 3,
  quantity: 1
}
const pear: CartItem = {
  productId: 2,
  name: "pear",
  price: 5,
  quantity: 2
}

const cart: CartItem[] = [banana, pear]

function calculateTotal(cart: CartItem[]): number {
  return cart.reduce((acc, item) => {
    return acc + (item.price * item.quantity)
  }, 0)
}