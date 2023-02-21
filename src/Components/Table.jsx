import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Table() {
  

  const [data ,setData] = useState([])
 
  useEffect(()=>{axios.get("https://api.coingecko.com/api/v3/coins/")
  .then((res)=>{setData(res.data)})
  .catch((err)=>{})
})
  
    return (
    <div><table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Coin</th>
        <th scope="col">price</th>
        <th scope="col">24h</th>
        <th scope="col">7d</th>
        <th scope="col">1y</th>
        <th scope="col">24h Volume</th>
        <th scope="col">MArket Cap</th>
        <th scope="col">Last 7 days</th>
       
      </tr>
    </thead>
    <tbody>

        {data.map((item, index)=>{
            return(

                <tr>
                <th scope="row">{index +1}</th>
                <td><Link>{item.name}</Link></td>
                <td>{item.market_data.current_price.usd}</td>
                <td>{item.market_data.price_change_percentage_24h}</td>
                <td>{item.market_data.price_change_percentage_7d}</td>
                <td>{item.market_data.price_change_percentage_1y}</td>
                <td>{item.market_data.market_cap_change_24h}</td>
                <td>{item.market_data.market_cap.usd}</td>
                <td></td>
              </tr>
                )
        })}
      
    
    </tbody>
  </table></div>
  )
}

export default Table