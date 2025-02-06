import React, { useState } from "react";

function About(){

    // const[uname,setUname] = useState('');

    const [formdata,setformData] = useState({
        uname:'',
        pass:'',
        add:'',
        con:'',
        sub:false
    });


    const[error,setError] = useState({
        name:'',
        pass:''
    });

    const formHandler = (event) =>{
        event.preventDefault();
        // console.log(uname);

        if(formdata.uname === ''|| formdata.uname===null){
            setError({
                name:'cannot be blank'
            })
            return;
        }
        if(formdata.pass.length<3 || formdata.pass.length>9){
            setError({
                pass:"length not in range"
            })
            return;
        }


        // if(formdata.uname === ''|| formdata.uname===null){
        //     alert('cant be blank');
        // }
    
        // // if(formdata.pass === ''|| formdata.pass === null){
        // //     alert('pass cant be blank')
        // // }
        // if(formdata.pass.length<3 || formdata.pass.length>9){
        //     alert('length must be in range')
        // }
    }

    

    const handleChange = (event)=>{
        setformData({
            ...formdata,
            [event.target.name]:event.target.type === 'checkbox'? event.target.checked: event.target.value
        });
    }

    return(
        <div>
        <h3>About Page</h3>
        <form onSubmit={formHandler}>
            <label htmlFor="uname">Username: </label>
            <input type="text"
            id="uname"
            name="uname"
            value={formdata.uname}
            onChange={handleChange}
            />
            {error && error.name}
             <br/><br/>
            <label htmlFor="pass">Password: </label>
            <input type="text"
            id="pass"
            name="pass"
            value={formdata.pass}
            onChange={handleChange}
            />
            {error && error.pass}<br/><br/>
            <label htmlFor="add">Address: </label>
            <textarea type="text"
            rows={5}
            cols={10}
            id="add"
            name="add"
            value={formdata.add}
            onChange={handleChange}
            /><br/>
            <label htmlFor="con">Country: </label>
            <select
            id="con"
            name="con"
            value={formdata.con}
            onChange={handleChange}
            >
                <option>Country</option>
                <option value='India'>India</option>
                <option value='USA'>USA</option>
                <option value='Japan'>Country</option>
                <option value='Russia'>Country</option>
                
            </select>
            <br/>

            <label htmlFor="sub">Subscribe: </label>
            <input type="checkbox"
            id="sub"
            name="sub"
            value={formdata.sub}
            onChange={handleChange}
            /><br/>
            <button>Submit</button>
        </form>
        {/* <p>UserName : {uname}</p> */}

        <p>FormData: {JSON.stringify(formdata)}</p>
        </div>
    )
}

export default About;


// React Libraries installed:

// 1. ReactJS
// 2. Json-Server
// 3. React router dom
// 4. Bootstrap
// 5. 