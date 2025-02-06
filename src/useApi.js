import React, { useEffect, useState } from "react";

function useApi(url){

    const[product,setProduct] = useState(null);
    const[loading,setLoading] = useState(false);

    useEffect(()=>{
            setLoading(true);
            fetch(url)
            .then(res=>res.json())
            .then(data=>setProduct(data))
            .finally(()=>{
                setLoading(false);
                return loading;
            })
        },[url]);
    
        return {product,loading};
}

export default useApi;
