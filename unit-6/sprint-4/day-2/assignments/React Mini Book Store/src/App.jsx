import { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";
import fictionData from "./fiction.json";
import NonFictionData from "./nonfiction.json";

function App() {
  const [showFiction, setShowFiction] = useState(true);

  function ToggleBtn() {
    setShowFiction(!showFiction);
  }
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button onClick={() => ToggleBtn()} data-testid="toggle-btn">
        {showFiction ? "Show Non-Fiction Books" : "Show Fictional Books"}
      </button>

      <div data-testid="conditional-container">
        {showFiction ? <Fiction fictionData={fictionData}/> : <NonFiction NonFictionData={NonFictionData}/>}
      </div>
    </div>
  );
}

export default App;
