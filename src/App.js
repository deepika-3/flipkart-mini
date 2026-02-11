import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import "./style.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Check login
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  // Login
  const login = async () => {
    const { data } = await supabase.auth.signInWithPassword({
      email: "sankatideepika3@gmail.com",
      password: "kenny@003"
    });
    setUser(data.user);
  };

  // Fetch products
  const loadProducts = async () => {
    const { data } = await supabase.from("products").select("*");
    setProducts(data);
  };

  // Add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Place order (dummy)
  const placeOrder = () => {
    alert("Order placed!");
    setCart([]);
  };

  if (!user) {
    return <button onClick={login}>Login</button>;
  }

  return (
    <div>
      <h2>Flipkart Mini</h2>
      <button onClick={loadProducts}>Load Products</button>

      <div className="grid">
        {products.map(p => (
          <div key={p.id} className="card">
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>Add</button>
          </div>
        ))}
      </div>

      <h3>Cart ({cart.length})</h3>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}
