import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function Details() {
const params = useParams()
const [coin, setCoin] = useState([])
const [loader,setLoader] =useState(true)


useEffect(()=>{axios.get(`https://api.coingecko.com/api/v3/coins/${params.det}`)
.then((res)=>{setCoin(res.data)
    setLoader(false)
    console.log(res)})
.catch((err)=>{console.log(err)})
},[])

      return (
    <div>
        {loader ? <h1> please patience </h1>
        : <div>   
        <h2> {coin.name}</h2>
        <img src={ coin.image.small} /> 
        < a href = {coin.links.homepage[0]}> Official Website link </a>  
        </div>}
        
    </div>
  )
}

export default Details