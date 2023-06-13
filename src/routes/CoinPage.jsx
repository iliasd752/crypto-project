import React, { useState, useEffect } from "react";
import axios from "axios";

function CoinPage() {
    const [coin, setCoin] = useState({});

    const url = 'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true';

    useEffect(() => {
        axios.get(url).then((response) => {
            setCoin(response.data)
            console.log(response.data)
        })
    }, [url])

    return (
    <div>
        <div>
            <img src={coin.image?.large} alt="/" />
            <div>
                <p>{coin?.name} price</p>
                <p>({coin.symbol?.toUpperCase()} / USD)</p>
            </div>
        </div>
        <div>
            <div>
                <div>
                    {coin.market_data?.current_price ? (<p>${coin.market_data.current_price.usd.toLocaleString()}</p>) : null}
                    <p>7 Day</p>
                </div>
                <div>
                    Sparkline
                </div>
            </div>
        </div>
    </div>
    )
}

export default CoinPage;