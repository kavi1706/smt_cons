import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { useUserContext } from "../Context/useUserContext";
import Loading from "../Home/Loading";
import { usePurchaseContext } from "../Context/usePurchaseContext";

const Cart = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const {userDetails} = useUserContext();
  const [cartQuantity, setCartQuantity] = useState(null)
  const [total, setTotal] = useState(0);
  const {csetTotal, csetCartDetails} = usePurchaseContext();

  useEffect(() => {
    setIsPending(true);
    fetch(`http://localhost:3000/tsir/purchase/cart/${userDetails._id}`)
      .then((res) => res.json())
      .then((data) => {
        for (let i in data) {
          data[i].quantity = 1;
        }
        let cartDetails = { products: [] };
        for (let i in data) {
          let product = {
            _id: data[i]._id,
            quantity: data[i].quantity,
            price: data[i].price,
          };
          cartDetails.products.push(product);
        }
        setCartItems(data);
        csetCartDetails(cartDetails)
        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [userDetails._id]);

  useEffect(()=>{
    let cartDetails = { products: [] };
    for (let i in cartItems) {
      let product = {
        _id: cartItems[i]._id,
        quantity: cartItems[i].quantity,
        price: cartItems[i].price,
      };
      cartDetails.products.push(product);
    }
    csetCartDetails(cartDetails);
  },[cartItems])

  useEffect(() => {
    setTotal(
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    );
    csetTotal(
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    );
    
    setCartQuantity(
      cartItems.reduce((total, item) => total + item.quantity, 0)
    );
  }, [cartItems]);

  const handleIncreaseQuantity = async (item) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCartItems(updatedCartItems);
    setCartQuantity(cartQuantity + 1);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  
  
  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
      setCartItems(updatedCartItems);
      setCartQuantity(cartQuantity - 1);
    }
  };

  const removeFromCart = async (item) => {
    try {
      const res = await fetch(
        `http://localhost:3000/tsir/purchase/cart/remove/${userDetails._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productIds: [item._id] }),
        }
      );
      const data = await res.json();
      setCartItems(data);
      setTotal(
        data.reduce((total, item) => total + item.price * item.quantity, 0)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart">
      {isPending && <Loading />}
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map((item) => (
        <div className="cart-item" key={item._id}>
          <img src={item.img} alt={item.name} />
          <div className="cart-item-details">
            <h3>{item.pname}</h3>
            <p>Price: Rs.{item.price}</p>
            <div className="quantity">
              <button onClick={() => handleDecreaseQuantity(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncreaseQuantity(item)}>+</button>
            </div>
            <button onClick={() => removeFromCart(item)}>
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <p>Total: Rs.{total}</p>
        </div>
      )}
      {cartItems.length > 0 &&
      <Link 
      to={{
          pathname:'/checkout',
          state: {total}
      }}
      >
          <button>
          proceed to checkout
          </button>
      </Link>}
    </div>
  );
}
export default Cart;