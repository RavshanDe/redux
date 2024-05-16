import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import BasketProduct from "./components/BasketProduct";
import Navbar from "./components/Navbar";
import { updateSlice } from "./features/basketSlice";
function App() {
  const { products } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateSlice());
  }, [products, dispatch]);
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
