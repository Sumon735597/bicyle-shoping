import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    
    const [success,setSuccess]=useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch('https://serene-tundra-17861.herokuapp.com/product', {
            method: 'POST',
            headers: {
               'content-type':'application/json' 
            },
            body:JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset();
                    setSuccess(true)
                }
            })
    };
    return (
        <div>
            <h1 style={{color:"goldenrod",margin:'50px'}}>Add New Product</h1>
        
            <div className="container m-5">
            <form onSubmit={handleSubmit(onSubmit)}>
           
                <input style={{width:'40%'}} placeholder="product Name" className="p-3 m-3" {...register("name", { required: true })} /> <br />
                <input style={{width:'40%'}} placeholder="Price" className="p-3 m-3" {...register("price", { required: true })} /> <br />
                <input style={{width:'40%'}} placeholder="Rating" className="p-3 m-3" {...register("rating", { required: true })} /> <br />
                <input style={{width:'40%'}} placeholder="imgUrl" className="p-3 m-3" {...register("img", { required: true })} /> <br />
                
                <input style={{width:'30%'}} className="btn btn-success p-2 m-3" type="submit" />
            </form>
                {success && <Alert variant="success">
                            SuccessFully Add Product           
                    </Alert>
                    }
            </div>
        </div>
    );
};

export default AddProduct;