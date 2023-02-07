import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [refetch, setRefetch] = useState(false);
  const [totalPrduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const exestingProduct = JSON.parse(localStorage.getItem("products"));

    if (exestingProduct != null) {
      let totalProduct = 0;
      let sum = 0;
      for (let i = 0; i < exestingProduct.length; i++) {
        totalProduct = totalProduct + exestingProduct[i].quantaty;
        sum = sum + exestingProduct[i].price * exestingProduct[i].quantaty;
        setTotalProduct(totalProduct);
        setTotalPrice(sum);
        setRefetch(!refetch);
      }
    }
  }, [refetch]);

  return (
    <div>
      <div className="navbar bg-base-300 mb-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/mycart">My Cart</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className=" btn btn-ghost normal-case text-xl">
            e-Commerce
          </Link>
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {totalPrduct}
                </span>
              </div>
            </label>

            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">${totalPrduct} Items</span>
                <span className="text-info">Subtotal: ${totalPrice}</span>
                <div className="card-actions">
                  <button
                    htmlFor="my-modal-3"
                    className="btn btn-primary btn-block"
                  >
                    place Order
                  </button>
                </div>
                <input
                  type="checkbox"
                  id="my-modal-3"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box relative">
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">
                      Congratulations random Internet user!
                    </h3>
                    <p className="py-4">
                      You've been selected for a chance to get one year of
                      subscription to use Wikipedia for free!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/mycart">My Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
