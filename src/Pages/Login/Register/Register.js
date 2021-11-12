import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { NavLink ,useHistory} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/Login.jpg'


const Register = () => {

    const { user, createNewUser, isLoading, error } = useAuth();
    const history=useHistory()

    const [registerData,setRegisterData]=useState({})

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

   
    const handleLogin = (e) => {

        if (registerData.password1 !== registerData.password2) {
            alert('Your password did not match');
            return
        }
        createNewUser(registerData.email,registerData.password1,registerData.name, history)
        e.preventDefault();
    }
    return (
        <div className="login-page container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
            <div className="col-md-6 mt-5">
                    <img className="img-fluid" src={login} alt="" />
                </div>
                <div style={{background:"#9155AB"}} className="col-md-6 shadow p-5">
                    {

                    !isLoading &&  <form onSubmit={handleLogin}>
                    <input
                        className='p-2 m-3'
                        style={{ width: '80%' }}
                        placeholder="Enter Your name"
                        type="text"
                        name="name"
                        required
                        onChange={handleOnChange}
                    /> <br />
                    <input
                        className='p-2 m-3'
                        style={{ width: '80%' }}
                        placeholder="Enter Your Email"
                        type="email"
                        name="email"
                        required
                        onChange={handleOnChange}
                    /> <br />

                    <input
                        className='p-2 m-3'
                        style={{ width: '80%' }}
                        placeholder="Enter Your Password"
                        type="password"
                        name="password1"
                        required
                        onChange={handleOnChange}
                    /><br />
                    <input
                        className='p-2 m-3'
                        style={{ width: '80%' }}
                        placeholder="Re-Type Your Password"
                        type="password"
                        name="password2"
                        required
                        onChange={handleOnChange}
                    /><br />
                    <NavLink
                        to="/login">
                         <Button variant="text">Already Register? please login.</Button>{' '}
                    </NavLink><br />
                    <button className="btn btn-primary" type="submit">Register</button>
                </form>
                        
                    }
                    {isLoading && <Spinner animation="border" />}
                    {user?.email && <Alert variant="success">
                            SuccessFully Login            
                    </Alert>
                    }
                    {
                        error && < Alert variant="danger">
                        {error}
                      </Alert>
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Register;


