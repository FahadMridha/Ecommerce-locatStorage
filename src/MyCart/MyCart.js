import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";

const MyCart = () => {
  const [products, setProducts] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  // useEffect(() => {
  //   const exestingProduct = JSON.parse(localStorage.getItem("products"));
  //   setProducts(exestingProduct);
  //   if (exestingProduct != null) {
  //     let sum = 0;
  //     for (let i = 0; i < exestingProduct.length; i++) {
  //       sum = sum + exestingProduct[i].price * exestingProduct[i].quantaty;
  //     }
  //     setTotalPrice(sum);
  //   }
  // }, [refetch]);
  useEffect(() => {
    const exestingProduct = JSON.parse(localStorage.getItem("products"));
    setProducts(exestingProduct);
    if (exestingProduct) {
      let sum = 0;
      for (let i = 0; i < exestingProduct.length; i++) {
        sum = sum + exestingProduct[i].price * exestingProduct[i].quantaty;
        setTotalPrice(sum);
      }
    }
  }, [refetch]);
  const handlerQuantatyDecrise = (id) => {
    // let newArry = [];
    // for (let i = 0; i < products.length; i++) {
    //   // console.log(products[i]);
    //   if (products[i].id === id && products[i].quantaty > 1) {
    //     const newData = { ...products[i], quantaty: products[i].quantaty - 1 };
    //     newArry.push(newData);
    //   } else {
    //     newArry.push(products[i]);
    //   }
    // }
    // localStorage.setItem("products", JSON.stringify(newArry));
    // setRefetch(!refetch);
    let newArry = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id && products[i].quantaty > 1) {
        const product = { ...products[i], quantaty: products[i].quantaty - 1 };
        newArry.push(product);
      } else {
        newArry.push(products[i]);
      }
    }
    localStorage.setItem("products", JSON.stringify(newArry));
    setRefetch(!refetch);
  };
  const handlerQuantatyIncrise = (id) => {
    let newArry = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        const product = { ...products[i], quantaty: products[i].quantaty + 1 };
        newArry.push(product);
      } else {
        newArry.push(products[i]);
      }
    }
    localStorage.setItem("products", JSON.stringify(newArry));
    setRefetch(!refetch);
  };
  const handlerDelete = (id) => {
    let newArry = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        window.confirm("are u sure");
      } else {
        newArry.push(products[i]);
      }
    }
    localStorage.setItem("products", JSON.stringify(newArry));
    setRefetch(!refetch);
  };

  return (
    <div>
      <Navbar />
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantaty</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="avatar">
                      <div className="w-32 rounded">
                        <img src={product.image} alt="product" />
                      </div>
                    </div>
                  </td>
                  <td>{product.title}</td>
                  <td>{product.price} $</td>

                  <td>
                    <button
                      onClick={() => handlerQuantatyDecrise(product.id)}
                      className="btn btn-info mr-1 btn-xs"
                    >
                      -
                    </button>
                    {product.quantaty}
                    <button
                      onClick={() => handlerQuantatyIncrise(product.id)}
                      className="btn btn-info  ml-1 btn-xs"
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handlerDelete(product.id)}
                      className="btn btn-error btn-xs"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <p className="text-4xl text-cen m-6">No Product Added</p>
            )}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th>Total Price </th>
              <th> {totalPrice}$</th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
