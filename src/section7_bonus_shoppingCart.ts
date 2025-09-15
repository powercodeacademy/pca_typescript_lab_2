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
  productId: number;
  name: string;
  quantity: number;
  price: number;
};

 const cart: CartItem[] = [
  {productId: 1, name: "ice", quantity: 2, price: 1},
  {productId: 2, name: "soda", quantity: 1, price: 2.50},
  {productId: 3, name: "bread", quantity: 1, price: 4}
]

const calculateTotal = (cart: CartItem[]): number => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
