import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {

    const [allOrder, setAllOrder] = useState([])
    const [isDelete, setIsDelete] = useState(true);


    useEffect(() => {
        fetch('https://serene-tundra-17861.herokuapp.com/allOrdersProduct')
            .then(res => res.json())
            .then(data=>setAllOrder(data))
    }, [isDelete])


    const handleDeleteProduct = (id) => {
     
        const conformation=window.confirm('Are you Sure to Delete !!!')
    
        if (conformation) {
            fetch(`https://serene-tundra-17861.herokuapp.com/orderProducts/${id}`, {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount) {
            //   alert('Delete SuccessFully')
              setIsDelete(!isDelete);
            }
          });
        }
    };
    
    const handleConformProduct = (id) => {

        const conformation=window.confirm('Are you Sure to Confirm !!!')
    
        if (conformation) {
            fetch(`https://serene-tundra-17861.herokuapp.com/confirmation/${id}`, {
          method: "PUT",
          headers: { "Content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((result) => {
              console.log(result)
              if (result.modifiedCount===1) {
                  setIsDelete(!isDelete)
              }
          });
        }
    }
    
   

    return (
        <div>
            <h1 style={{color:'goldenrod',margin:'40px'}}>Total Orders :{allOrder.length}</h1>
            <div className="container">
                <Table >
                    <thead>
                        <tr>
                        <th>Product Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Action</th>
                        <th>Order Confirm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrder.map(pd =><tr key={pd._id} pd={pd}>
                                <td>{ pd.name}</td>
                                <td>{pd.User_name}</td>
                                <td>{pd.email}</td>
                                <td><button onClick={()=>handleDeleteProduct(pd._id)} className="btn btn-danger ">Cancel</button></td>
                                <td>
                                    {
                                          (pd.status === 'Pending') &&
                                            <button onClick={()=>handleConformProduct(pd._id)} className="btn btn-primary ">Conform</button>
                                        
                                    }
                                     
                                   </td>
                                </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageAllOrders;