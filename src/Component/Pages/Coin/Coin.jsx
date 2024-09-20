import React, { useContext, useEffect, useState } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import { coincontext } from '../../../Context/Coincontext';

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicaldata, setHistoricaldata] = useState();
  const { currency } = useContext(coincontext);

  const fetchcoindata = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-ysHHrcwat8sVJKbeG6eiPAx8'
      }
    };
    
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchhistoricaldata = async () =>{const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': 'CG-ysHHrcwat8sVJKbeG6eiPAx8	'
    }
  };
  
  fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=10', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchcoindata();
  }, [coinId, currency]);

  if (coinData) {
    return (
      <div className='coin'>
        <div className="coin_name">
          <img src={coinData.image?.large} alt={coinData.name} />
          <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
        </div>
        coin: {coinId}
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;
