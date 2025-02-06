import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "./useApi";

function ShowDetail(){
    const navigate = useNavigate();
    const params = useParams();
    const {product:data,loading} = useApi(`http://localhost:3000/product/${params.id}`);

    return(
        <>
            <h3>Product Details</h3> 
            {
                loading && 'loading'
            } 
            {
                data &&
                <div id="mydiv1">
            <ul>
                <li><img src={data.img1} alt=""/></li>
                {/* <li>{props.pr.id}</li> */}
                <li>{data.id}</li>
                <li>{data.name}</li>
                <li>{data.category}</li>
                <li>{data.description}</li>
                <li>{data.price}</li>
            </ul>
            <button onClick={()=>{
                setTimeout(()=>{
                    navigate('/showproduct')
                },1000)
            }}>GoBack</button>
        </div>
            }  
        </>
    )
}

export default ShowDetail;