import React, { useCallback, useEffect, useState } from "react";
import Product from "./Product";
import useApi from "./useApi";
function MyShop(){

    // const[product,setProduct] = useState([]);
    
    const[url,setUrl] = useState(`http://localhost:3000/product`)
    const{product:data,loading} = useApi(url);

    // const fetchData = useCallback(()=>{
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setProduct(data));
    // },[])

    // useEffect(()=>{
    //     fetchData();
    // },[fetchData])

    // useEffect(()=>{
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setProduct(data));
    // },[url]);

    console.log(data);
    return(
        <>
            <h3>Welcome to Myshop</h3>
            <button onClick={()=>setUrl(`http://localhost:3000/product`)}>All</button>
            <button onClick={()=>setUrl(`http://localhost:3000/product/?category=watch`)}>Watch</button>
            <button onClick={()=>setUrl(`http://localhost:3000/product?category=Laptop`)}>Laptop</button>
            <button onClick={()=>setUrl(`http://localhost:3000/product?category=SmartPhone`)}>Smartphone</button>

            {loading && 'loading...'}
            {
                data && data.map((p,ind)=>{
                    // return <Product pr = {p} key={ind}/>
                    return <Product {...p} key={ind}/>
                })
            }
        </>
    )
}

export default MyShop;