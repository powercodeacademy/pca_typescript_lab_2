// Create CartItem type, cart array, and calculateTotal function

// Your code here 👇

type CartItem = {
productId: number
name: string
price: number
quantity: number
}

const cart: CartItem[] = [
  { productId: 1, name: "oranges", price: 2, quantity: 2 },
  { productId: 2, name: "apples", price: 5, quantity: 3 },
]
  

function calculateTotal(cart: CartItem[]): number {
  return cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
}

console.log(calculateTotal(cart))