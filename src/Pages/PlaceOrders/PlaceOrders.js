import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const PlaceOrders = () => {

    const { id } = useParams();
    const history = useHistory();
    // const location = useLocation();
    const [products, setProducts] = useState({})
    const { register, handleSubmit,formState: { errors } } = useForm();
    
    const { user } = useAuth()
    

    useEffect(() => {
        fetch(`https://serene-tundra-17861.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data=>setProducts(data))
    }, [])
    
    const onSubmit = data => {
        fetch('https://serene-tundra-17861.herokuapp.com/orderProducts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId){
                alert('Order Successfully');
                // const path = location?.state?.from || '';
                history.replace('/dashboard')
                
            }
        })
    };
    
    return (
        <div>
            <h1 style={{color:'goldenrod',margin:'30px'}}>Please Order Your Product</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={products.img} alt="" />
                        <h1>{products.name}</h1>
                        <h3>Price : {products.price}</h3>
                    </div>
                    <div className="col-md-6 mt-5 text-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                            { user.displayName && <input style={{width:'80%'}} className="p-3 m-3" defaultValue={user.displayName} {...register("User_name")} />}<br/>
                            {products.name && <input style={{width:'80%'}} className="p-3 m-3" defaultValue={products.name} {...register("name")} />} <br/>
                            {products.price && <input style={{width:'80%'}} className="p-3 m-3" defaultValue={products.price} {...register("price")} />} <br/>
                          
                            
                            { user?.email && <input style={{width:'80%'}} className="p-3 m-3" defaultValue={user.email} {...register("email")} />}<br/>
                            <input style={{width:'80%'}} className="p-3 m-3" type={Number} placeholder="Phone Number" {...register("phone")} /><br/>
                            <input style={{width:'80%'}} className="p-3 m-3" type={Number} defaultValue='Pending' {...register("status")} /><br/>
            
                          
                            
                            <input style={{width:'80%'}} className="btn btn-success p-2 m-3" type="submit" />          
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrders;