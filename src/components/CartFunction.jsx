import React, { useState } from "react";
import img1 from "./assest/shopin3.jpg";
import img2 from "./assest/shoping1.jpg";
import img3 from "./assest/shoping2.jpg";
import img4 from "./assest/shoping4.jpg";
import img5 from "./assest/shoping5.jpg";

const CartFunction = () => {
  const [count, setCount] = useState(1);

  const data = [
    {
      name: "product 1",
      imgUrl: img1,
      price: 150,
    },
    {
      name: "product 2",
      imgUrl: img2,
      price: 75,
    },
    {
      name: "product 3",
      imgUrl: img3,
      price: 50,
    },
    {
      name: "product 4",
      imgUrl: img4,
      price: 10,
    },
    {
      name: "product 5",
      imgUrl: img5,
      price: 15,
    },
    {
      name: "product 6",
      imgUrl: img4,
      price: 50,
    },
    {
      name: "product 7",
      imgUrl: img2,
      price: 200,
    },
  ];
  const [addCart, setAddToCart] = useState([]);

  const addToCartHandler = (obj) => {
    const existingProduct = addCart.find((item) => item.name === obj.name);
    if (existingProduct) {
      // If the product already exists in the cart, update its quantity
      setAddToCart((prevCart) =>
        prevCart.map((item) =>
          item.name === obj.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product does not exist in the cart, add it with quantity 1
      setAddToCart((prevCart) => [...prevCart, { ...obj, quantity: 1 }]);
    }
  };

  return (
    <div className="d-flex justify-content-between">
      <div className="w-100 max_width mx-auto d-flex flex-column justify-content-center align-items-center">
        <div className="row">
          {data.map((obj, i) => (
            <div key={i} className="col-3 pt-4">
              <div className="card p-4">
                <h2>{obj.name}</h2>
                <img className="product_img" src={obj.imgUrl} alt="img" />
                <p className="mb-0 price">${obj.price}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn-primary btn w-100 me-1">
                    Buy Now
                  </button>
                  <button
                    onClick={() => addToCartHandler(obj)}
                    className="btn-primary btn w-100 ms-1"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="vh-100 d-flex flex-column align-items-start overflow-hidden">
        <div className="sidebar overflow-auto">
          {addCart.length > 0 &&
            addCart.map((obj, i) => (
              <div key={i}>
                <img className="cart_img w-100" src={obj.imgUrl} alt="img" />
                <h2 className="mt-2 mb-0">{obj.name}</h2>
                <p className="mb-0 price">${obj.price}</p>
                <div className="quantity_div d-flex align-items-center">
                  <h4>Quantity : </h4>
                  <div>
                    <span className="btn btn-success">-</span>
                    <span>{count}</span>
                    <span className="btn btn-success">+</span>
                  </div>
                </div>
                <hr className="border-bottom border-dark w-100 " />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CartFunction;
