import React from "react";
import {
 
    Switch,
    Route,
    Link,
   
    useRouteMatch
  } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AddProduct from "../../AddProduct/AddProduct";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import MakeAdmin from "../../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../../ManageAllOrders/ManageAllOrders";
import MyOrders from "../../MyOrders/MyOrders";
import Payment from "../../Payment/Payment";
import ProductManage from "../../ProductManage/ProductManage";
import Review from "../../Review/Review";
import './DashBoard.css'


const DashBoard = () => {
    const { admin,logOut } = useAuth();
    console.log(admin)
    let { path, url } = useRouteMatch();
    return (
            <div className="dashboard-container ">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard">
                        <h1>Dashboard</h1>
                        <Link to={`${url}`}>
                            <li className="dashboard-item mt-5">DashBoard</li>
                        </Link>
                        <Link to={`${url}/myOrders`}>
                            <li className="dashboard-item mt-2">My Orders</li>
                        </Link>
                        <Link to={`${url}/payment`}>
                            <li className="dashboard-item mt-2">Payment</li>
                        </Link>
                        <Link to={`${url}/review`}>
                            <li className="dashboard-item mt-2">Review</li>
                        </Link>
                        <p>----------------------------------</p>
                        
                        {admin &&<div className="m-5">
                                    <Link to={`${url}/makeAdmin`}>
                                        <li className="dashboard-item mt-2">Make Admin</li>
                                    </Link>
                                    <Link to={`${url}/addProduct`}>
                                        <li className="dashboard-item mt-2">Add Products</li>
                                    </Link>
                                    <Link to={`${url}/productManage`}>
                                        <li className="dashboard-item mt-2">Products Manage</li>
                                    </Link>
                                    <Link to={`${url}/allOrders`}>
                                        <li className="dashboard-item mt-2">Manage All Orders</li>
                                    </Link>
                                </div>
                        }
                        <p>.......................</p>

                        <button onClick={logOut} className="btn btn-primary">LogOut</button>
              
                    </div>
                </div>
          <div className="col-md-9">
                <Switch>
                    <Route exact path={path}>
                     <MyOrders/>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders/>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment/>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/productManage`}>
                        <ProductManage></ProductManage>
                    </AdminRoute>
                    <AdminRoute path={`${path}/allOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                </Switch>
          </div>
        </div>
      </div>
    );
};

export default DashBoard;



// {/* <div className="admin-dashboard">
//                 <li className="dashboard-menu mt-5">Orders list</li>

               
//                   <Link to="/">
//                     <li className="dashboard-menu">Add Service</li>
//                   </Link>
            
//                 <Link to="/">
//                   <li className="dashboard-menu">Make Admin</li>
//                 </Link>
//                 <Link to="/">
//                   <li className="dashboard-menu">Manage Service</li>
//                 </Link>
//               </div> */}