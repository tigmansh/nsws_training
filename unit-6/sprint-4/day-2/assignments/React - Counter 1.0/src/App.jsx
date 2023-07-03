import "./App.css";
import Counter from "./components/Counter";
function App() {
  return (
    <div className="App">
      <div data-testid="counter">
        <Counter initCount={0} />
      </div>
    </div>
  );
}

export default App;
