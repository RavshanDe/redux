import React from "react";
import { useSelector, UseSelector } from "react-redux";
import Product from "./Product";
const BasketProduct = () => {
  const { products, total, amount } = useSelector((store) => store.basket);
  return (
    <div className="mx-auto max-w-7xl py-4">
      {amount > 1 ? (
        <>
          <div>
            {products.map((item, i) => (
              <Product
                key={new Date().getTime + Math.random()}
                name={item.name}
                price={item.price}
                image={item.image}
                amount={item.amount}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="text-2xl text-gray-700 font-medium text-center">
            Your basket is Empty
          </p>
        </>
      )}
      <div className="flex flex-row items-center justify-evenly py-8">
        <p className="text-2xl font-medium">Total</p>
        <p className="text-2xl font-medium">$ {total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BasketProduct;
