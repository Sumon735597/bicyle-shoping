import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { NavLink ,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

import login from '../../../images/Login.jpg'


const Login = () => {

    const { user,signInWithGoogle , loginUser,isLoading,error} = useAuth();
    const [loginData, setLoginData] = useState({})


    const location = useLocation();
    const history = useHistory();
    

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    console.log(loginData)
    const handleLogin = (e) => {
        loginUser(loginData.email,loginData.password,location,history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location,history)
    }
    return (
        <div className="login-page container align-items-center">
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
                            placeholder="Enter Your Email"
                            type="text"
                            name="email"
                            onChange={handleOnChange}
                        /> <br />

                        <input
                            className='p-2 m-3'
                            style={{ width: '80%' }}
                            placeholder="Enter Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                        /><br />
                        <NavLink
                            to="/register">
                             <Button variant="text">Are You New User? please Register</Button>{' '}
                        </NavLink><br />
                        <button style={{ width: '80%' }} className="btn btn-primary"  type="submit">Login</button>
                        </form>
                    }
                    <p>-------------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant='success'>Sing In Google</Button>
                    

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

export default Login;