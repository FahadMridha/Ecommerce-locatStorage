import React from "react";
import { json } from "react-router-dom";

const Productart = ({ product }) => {
  const { category, id, description, image, title, price } = product;

  const handlerAddToCart = (productValue) => {
    // const exestingProduct = JSON.parse(localStorage.getItem("products"));
    // if (exestingProduct == null) {
    //   const product = { ...productValue, quantaty: 1 };
    //   const productArray = [product];
    //   localStorage.setItem("products", JSON.stringify(productArray));
    // } else {
    //   let found = false;
    //   for (let i = 0; i < exestingProduct.length; i++) {
    //     if (exestingProduct[i].id === id) {
    //       found = true;
    //     }
    //   }
    //   if (found === false) {
    //     const product = { ...productValue, quantaty: 1 };
    //     const productArray = [...exestingProduct, product];
    //     localStorage.setItem("products", JSON.stringify(productArray));
    //     alert("successfually product added");
    //   } else {
    //     alert("product already added");
    //   }
    // }
    const exestingProduct = JSON.parse(localStorage.getItem("products"));
    if (exestingProduct == null) {
      const product = { ...productValue, quantaty: 1 };
      const productArray = [product];
      localStorage.setItem("products", JSON.stringify(productArray));
    } else {
      let found = false;
      for (let i = 0; i < exestingProduct.length; i++) {
        if (exestingProduct[i].id === id) {
          found = true;
        }
      }
      if (found === false) {
        const product = { ...productValue, quantaty: 1 };
        const productArray = [...exestingProduct, product];
        localStorage.setItem("products", JSON.stringify(productArray));
        alert("added");
      } else {
        alert("already have");
      }
    }

    console.log(exestingProduct);
  };
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="object-cover h-64" src={image} alt="product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description.split(0, 100)} ..</p>
          <p className="font-bold"> price: {price} $</p>
          <p>{category}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handlerAddToCart(product)}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productart;