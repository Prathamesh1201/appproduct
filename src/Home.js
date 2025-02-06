import React from "react";
import { useForm } from "react-hook-form";
import { data } from "react-router-dom";

function Home() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data)=>{
        console.log(data);
    }

    return (
        <div>
            <h2>My Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="uname">Username: </label>
                <input type="text"
                    id="uname"
                    {...register('uname',{required:true})}
                />
                <br />
                <label htmlFor="pass">Password: </label>
                <input type="text"
                    id="pass"
                    {...register('pass')}
                />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Home;