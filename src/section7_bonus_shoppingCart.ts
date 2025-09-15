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

let cart: CartItem[] = [{ productId: 3, name: "Josh", quantity: 6, price: 16 }];

function calculateTotal(cart: CartItem[]): number {
  return cart.reduce(
    (total: number, item: CartItem) => total + item.quantity * item.price,
    0
  );
}
