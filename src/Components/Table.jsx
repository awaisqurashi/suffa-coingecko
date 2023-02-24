import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Table() {
  

  const [data ,setData] = useState([])
  const [ loading , setLoading] = useState(true)
 
  useEffect(()=>{axios.get("https://api.coingecko.com/api/v3/coins/")
  .then((res)=>{
    setLoading(false) 
    setData(res.data)})
  .catch((err)=>{})
},[])
  
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
 
        { loading ? <h1> Data is Loading</h1> :
        data.map((item, index)=>{
          return(

              <tr key ={index}>
              <th scope="row">{index +1}</th>
              <td><Link to={item.id}>{item.name}</Link></td>
              <td>{item.market_data.current_price.usd}</td>
              <td>{item.market_data.price_change_percentage_24h}</td>
              <td>{item.market_data.price_change_percentage_7d}</td>
              <td>{item.market_data.price_change_percentage_1y}</td>
              <td>{item.market_data.market_cap_change_24h}</td>
              <td>{item.market_data.market_cap.usd}</td>
              <img src={`https://www.coingecko.com/coins/${item.market_data.market_cap_rank}/sparkline`} alt='sda'/>
           
            </tr>
              )
      })} 
        
      
    
    </tbody>
  </table></div>
  )
}

export default Table