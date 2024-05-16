import React from "react";
import { useDispatch, UseDispatch } from "react-redux";
import {
  increaseAmount,
  decreaseAmount,
  removeItem,
} from "../features/basketSlice";
const Product = ({ name, price, image, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row items-center gap-8 px-10">
      <img className="w-40" src={image} />
      <div className="w-1/2 px-10">
        <p className="text-xl font-medium">{name}</p>
        <p className="text-lg tracking-wide">$ {price.toFixed(2)}</p>
        <button
          className="text-red-500 tracking-widept-1 pb-3"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem({ name }));
              return;
            }
            dispatch(decreaseAmount({ name }));
          }}
        >
          Remove
        </button>
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-medium">Amount</p>
        <div className="flex flex-row items-center text-gray-600 gap-4 font-medium">
          <button
            className="text-xl"
            onClick={() => {
              if (amount > 1) dispatch(decreaseAmount({ name }));
            }}
          >
            -
          </button>
          <p>{amount}</p>
          <button
            className="text-xl"
            onClick={() => {
              dispatch(increaseAmount({ name }));
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
