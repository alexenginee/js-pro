type Ingredient = "beef" | "cheese" | "sauce" | "cucumber" | "flour" | "salad";
type Currenc = "usd" | "euro";

interface Product {
  id: number;
  name: string;
  price: number;
  currency: Currenc;
  ingredients: Ingredient[];
  type: string;
  isAvailable: true;
}

const products: Array<Product> = [
  {
    id: 1,
    name: "Burger Premium",
    price: 6,
    currency: "euro",
    ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
    type: "burger",
    isAvailable: true,
  },
  {
    id: 2,
    name: "Burger Lite",
    price: 2.3,
    currency: "usd",
    ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
    type: "burger",
    isAvailable: true,
  },
];
