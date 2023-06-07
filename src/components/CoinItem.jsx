import {AiOutlineStar} from "react-icons/ai";
import React from "react";

const CoinItem = ({coin}) => {
    return (
        <tr className='h-[80px] border-b overflow-hidden'>
            <td><AiOutlineStar/></td>
            <td>{coin.market_cap_rank}</td>
            <td>
                <div className='flex items-center'>
                    <img className='w-6 mr-2 rounded-full' src={coin.image} alt={coin.id}/>
                    <p className='hidden sm:table-cell'>{coin.name}</p>
                </div>
            </td>
            <td>{coin.symbol}</td>
            <td>{coin.current_price}</td>
            <td>
                {coin.price_change_percentage_24h > 0 ? (
                    <p className='text-green-600'>{coin.price_change_percentage_24h}</p>) : (
                    <p className='text-red-600'>{coin.price_change_percentage_24h}</p>)}

            </td>
            <td className='w-[180px] hidden md:table-cell'>{coin.total_volume}</td>
            <td className='w-[180px] hidden sm:table-cell'>{coin.market_cap}</td>
            <td>

            </td>
        </tr>
    )
}


export default CoinItem;