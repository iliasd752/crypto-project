import {AiOutlineStar} from "react-icons/ai";
import React from "react";

const CoinItem = ({coin}) => {
    return (
        <tr>
            <td><AiOutlineStar /></td>
            <td>{coin.market_cap_rank}</td>
            <td>
                <div>
                    <img src={coin.image} alt={coin.id}/>
                    <p>{coin.name}</p>
                </div>
            </td>
            <td>{coin.symbol}</td>
            <td>{coin.current_price}</td>
            <td>{coin.price_change_percentage_24h}</td>
            <td>{coin.total_volume}</td>
            <td>{coin.market_cap}</td>
            <td>

            </td>
        </tr>
    )
}


export default CoinItem;