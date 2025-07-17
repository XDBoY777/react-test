import { useState, useEffect, useRef } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = ({ cartItems, updateUnit, removeFromCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalUnits = cartItems.reduce((sum, item) => sum + item.unit, 0);
  const navigate = useNavigate();
  const cartRef = useRef(null);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Ha a kattintás nem a cartRef elemen belül történt, zárjuk be a cartot
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen]);

  return (
    <header className="app-header">
      <div className="header-fixer"></div>
      <h1 className="header-title">HALLO WORLD</h1>
      <div className="cart-container" ref={cartRef}>
        <button onClick={toggleCart} className="cart-button">
          <span>Shopping Cart</span>
          <span className="cart-count">{totalUnits}</span>
        </button>
        {isCartOpen && (
          <div className="cart-dropdown">
            <h2>You have {totalUnits} items in your cart!</h2>

            <div className="cart-header-row">
              <div className="cart-header-title">
                {" "}
                <span>Items</span>
              </div>
              <div className="cart-header-title units-title">
                {" "}
                <span>Units</span>
              </div>
              <div className="cart-header-title price-title">
                {" "}
                <span>Price</span>
              </div>
            </div>

            <ul className="cart-items">
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <div className="cart-item-prop">
                    <span>{item.name}</span>
                  </div>
                  <div className="cart-item-prop right-aligned-prop cart-item-units">
                    <div className="unit-controls">
                      <button
                        onClick={() => updateUnit(item.id, 1)}
                        className="update-unit-button"
                      >
                        ▲
                      </button>
                      <button
                        onClick={() => updateUnit(item.id, -1)}
                        className="update-unit-button"
                      >
                        ▼
                      </button>
                    </div>
                    <span>{item.unit}</span>
                    <button
                      className="trash-button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                  <div className="cart-item-prop right-aligned-prop ">
                    <span>£{item.price}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="total-value">
              <p>Total Order Value:</p>
              <p>
                £
                {cartItems.reduce(
                  (sum, item) => sum + item.price * item.unit,
                  0
                )}
              </p>
            </div>

            <button
              className="checkout-button"
              onClick={() => navigate("/success")}
              disabled={totalUnits === 0}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
