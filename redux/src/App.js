import "./App.css";
import BasketProduct from "./components/BasketProduct";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <h1 className=" text-center text-2xl font-medium mt-2 py-4">
        12 -Redux store
      </h1>
      <BasketProduct />
    </div>
  );
}
export default App;
