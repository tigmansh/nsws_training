import "./App.css";
import data from "./db.json";
import Product from "./components/Product";
import { useState } from "react";

function App() {
  const [Data, setData] = useState(data);

  function handleQty(id, value) {
    let x = Data.map((item) => {
      if (item.id === id) {
         var q = item.quantity + value;
         return {...item, quantity: q};
      }
      return item;
    });

    setData([...x]);
  }
  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {/*  map through the  data and pass props to the Product component */}
        {Data.map((ele) => (
          <Product {...ele} handleQty={handleQty} />
        ))}
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
        {Data.reduce((acc, item) => {
          return (acc += item.quantity * item.price);
        }, 0)}
      </h1>
    </div>
  );
}

export default App;
