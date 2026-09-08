// Create CartItem type, cart array, and calculateTotal function

// Your code here 👇

type CartItem = {
  productId: number
  name: string
  quantity: number
  price: number
}

let cart: CartItem[] = [
  { productId: 1, name: "Notebook", quantity: 2, price: 3.50 },
  { productId: 2, name: "Pen", quantity: 4, price: 1.50 }
]

function calculateTotal(cart: CartItem[]): number {
  let total: number = 0;
  for (const item of cart) {
    total = total + item.quantity * item.price;
  }
  return total
}
