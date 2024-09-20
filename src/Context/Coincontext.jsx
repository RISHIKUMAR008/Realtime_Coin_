import { createContext, useEffect, useState } from "react";

export const coincontext = createContext();

const CoincontextProvider = (props) => {
    const [allcoin, setAllcoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "Inr", symbol: "₹"
    });

    useEffect(() => {
        const fetchAllcoin = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    'x-cg-demo-api-key': 'CG-ysHHrcwat8sVJKbeG6eiPAx8'
                }
            };

            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options);
                const data = await response.json();
                setAllcoin(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchAllcoin();
    }, [currency]);

    const contextvalue = {
        allcoin, currency, setCurrency
    };

    return (
        <coincontext.Provider value={contextvalue}>
            {props.children}
        </coincontext.Provider>
    );
};

export default CoincontextProvider;
