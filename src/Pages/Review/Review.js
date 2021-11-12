import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const Review = () => {

    const { register, handleSubmit ,reset} = useForm();
    const {user}=useAuth()
    const onSubmit = data => {
        fetch('https://serene-tundra-17861.herokuapp.com/reviewUser',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId){
                alert('Review create Successfully');
                reset()
            }
        })
    };
    return (
        <div>
            <h1 style={{color:'goldenrod', marginTop:'30px'}}>Please Review ,Our Website </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
            {user.email && <input style={{width:'40%'}} className="p-3 m-3 mt-5" defaultValue={user.email} {...register("email")} />} <br />
            <input style={{width:'40%'}} className="p-3 m-3" {...register("comment")} /> <br />
             Rating:   <select style={{width:'20%'}} className="p-3 m-3" placeholder="Rating" {...register("rating")}> <br />
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select> <br />
            <input style={{width:'10%'}} className="btn btn-success p-2 m-3" type="submit" />
            </form>
        </div>
    );
};

export default Review;