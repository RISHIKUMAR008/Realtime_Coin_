import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import arrow_icon from "../../Assets/arrow_icon.png";
import { coincontext } from "../../Context/Coincontext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setcurrency } = useContext(coincontext);
  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "Inr": {
        setcurrency({ name: "inr", Symbol: "₹" });
        break;
      }
      case "usd": {
        setcurrency({ name: "usd", Symbol: "$" });
        break;
      }

      case "euro": {
        setcurrency({ name: "euro", Symbol: "€" });
        break;
      }
      default: {
        setcurrency({ name: "inr", Symbol: "₹" });
        break;
      }
    }
  };
  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="select">select</option>
          <option value="inr">IND</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
        <button>
          Sign Up <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
