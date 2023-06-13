import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import {FaTwitter, FaFacebook, FaReddit, FaGithub} from 'react-icons/fa';
import DOMPurify from "dompurify";

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
                <Sparklines data={coin.market_data?.sparkline_7d.price}>
                    <SparklinesLine color='teal' />
                </Sparklines>
            </div>
            <div>
                <div>
                    <p>Market Cap</p>
                    {coin.market_data?.market_cap ? (<p>${coin.market_data.market_cap.usd.toLocaleString()}</p>) : null}
                </div>
                <div>
                    <p>Volume (24h)</p>
                    {coin.market_data?.market_cap ? (<p>${coin.market_data.total_volume.usd.toLocaleString()}</p>) : null}
                </div>
            </div>
            <div>
                <div>
                    <p>24h High</p>
                    {coin.market_data?.high_24h ? (<p>${coin.market_data.high_24h.usd.toLocaleString()}</p>) : null}
                </div>
            </div>
            <div>
                <div>
                    <p>24h Low</p>
                    {coin.market_data?.low_24h ? (<p>${coin.market_data.low_24h.usd.toLocaleString()}</p>) : null}
                </div>
            </div>
            <div>
                <p>Market Stats</p>
                <div>
                    <div>
                        <p>Market Rank</p>
                        {coin.market_cap_rank}
                    </div>
                    <div>
                        <p>Hashing Algorithm</p>
                        {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
                    </div>
                    <div>
                        <p>Trust Score</p>
                        {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
                    </div>
                </div>
                <div>
                    <div>
                        <p>Price Change (24h)</p>
                        {coin.market_data ? (<p>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>) : null}
                    </div>
                    <div>
                        <p>Price Change (7d)</p>
                        {coin.market_data ? (<p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>) : null}
                    </div>
                    <div>
                        <p>Price Change (14d)</p>
                        {coin.market_data ? (<p>{coin.market_data.price_change_percentage_14d.toFixed(2)}%</p>) : null}
                    </div>
                </div>
                <div>
                    <div>
                        <p>Price Change (30d)</p>
                        {coin.market_data ? (<p>{coin.market_data.price_change_percentage_30d.toFixed(2)}%</p>) : null}
                    </div>
                    <div>
                        <p>Price Change (60d)</p>
                        {coin.market_data ? (<p>{coin.market_data.price_change_percentage_60d.toFixed(2)}%</p>) : null}
                    </div>
                    <div>
                        <p>Price Change (1y)</p>
                        {coin.market_data ? (<p>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>) : null}
                    </div>
                </div>
                <div>
                    <FaTwitter />
                    <FaFacebook />
                    <FaReddit />
                    <FaGithub />
                </div>
            </div>
        </div>
        {/* Description */}
        <div>
            <p>About {coin.name}</p>
            <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : ''), }}></p>
        </div>
    </div>
    )
}

export default CoinPage;