import React from "react";
import { useSearchParams } from "react-router-dom";

function Contact(){

    const[data,setData] = useSearchParams();
    console.log(data.get('name'));
    console.log(data.get('price'));

    return(
        <>
        <h3>Contact Page</h3>
        <button onClick={setData({name:'xyz',price:data.get('price')})}>Change Data</button>
        </>
    )
}

export default Contact;