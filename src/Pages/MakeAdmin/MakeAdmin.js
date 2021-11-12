import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {

    const [success,setSuccess]=useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data)
        fetch('https://serene-tundra-17861.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
               'content-type':'application/json' 
            },
            body:JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    reset()
                    setSuccess(true)
                }
            })
    };

    return (
        <div>
            <h1>Make Admin</h1>
            <div className="container m-5">
            <form onSubmit={handleSubmit(onSubmit)}>
           
                <input style={{width:'40%'}} className="p-3 m-3" {...register("email", { required: true })} /> <br />
                
                <input style={{width:'30%'}} className="btn btn-success p-2 m-3" type="submit" />
            </form>
                {success && <Alert variant="success">
                            SuccessFully Create Admin           
                    </Alert>
                    }
            </div>
        </div>
    );
};

export default MakeAdmin;