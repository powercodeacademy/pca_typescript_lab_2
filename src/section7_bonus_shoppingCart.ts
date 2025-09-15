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
  { productId: 1, name: "Item1", quantity: 1, price: 10 },
  { productId: 2, name: "Item2", quantity: 5, price: 23 },
];

const calculateTotal = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + item.quantity * item.price, 0);
};
