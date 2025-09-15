// BONUS TASK:
// 1. Create a type alias called CartItem with the following properties:
//    - productId: number
//    - name: string
//    - quantity: number
//    - price: number
//
// 2. Create an array called cart that contains multiple CartItems.
//
// 3. Create a function called calculateTotal that:
//    - takes the cart array
//    - returns the total cost (sum of quantity × price for each item)

// Your code here 👇
type CartItem = {
  productId: number
  name: string
  quantity: number
  price: number
 }

const cart: CartItem[] = [
  { productId: 1, name: "Laptop", quantity: 1, price: 1200 },
  { productId: 2, name: "Headphones", quantity: 2, price: 150 },
  { productId: 3, name: "Mouse", quantity: 1, price: 40 }
]

const calculateTotal = (cart: CartItem[]): number => {
  let total = 0;
  cart.forEach(item => {
    total += item.quantity * item.price;
  });
  return total;
};
