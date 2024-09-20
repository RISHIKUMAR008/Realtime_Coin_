import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { coincontext } from '../../../Context/Coincontext';
import { Link } from 'react-router-dom';
const Home = () => {
  const { allcoin, currency } = useContext(coincontext);
  const [displaycoin, setdisplaycoin] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (event) => {
    setInput(event.target.value);
    if(event.target.value ==="")
      {
        setdisplaycoin(allcoin);
      }
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allcoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setdisplaycoin(coins);
  };

  useEffect(() => {
    setdisplaycoin(allcoin);
  }, [allcoin]);

  return (
    <div className="home">
      <div className="hero">
        <h1>Largest <br /> Crypto Marketplace</h1>
        <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about crypto.</p>
        <form onSubmit={searchHandler}>
          <input 
            type="text" 
            placeholder="Search crypto..." 
            onChange={inputHandler} 
            required 
            value={input} 
            list='coinlist'
          />
          <datalist id='coinlist'>{allcoin.map((item,index)=>(<option key={index} value={item.name}/>))}</datalist>
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className="market">Market Cap</p>
        </div>
        {displaycoin.slice(0, 10).map((item) => (
          <Link to={`/coin/${item.id}`} className="tablelayout" key={item.id}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt={item.name} />
              <p className="market">{item.name} - {item.symbol}</p>
            </div>
            <p className="market">{currency.symbol}{item.current_price}</p>
            <p className="market">{item.price_change_percentage_24h}</p>
            <p className="market">{currency.symbol}{item.market_cap}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;