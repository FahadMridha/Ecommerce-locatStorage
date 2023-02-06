import React, { useEffect, useState } from "react";
import Productart from "./Productart";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div className="text-center">Loadding..............</div>;
  }
  console.log(products);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
      {products &&
        products?.map((product) => (
          <Productart key={product.id} product={product}></Productart>
        ))}
    </div>
  );
};

export default Products;
