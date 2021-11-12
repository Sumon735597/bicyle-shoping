import React, { useEffect, useState } from 'react';
import { Table} from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {

    const { user } = useAuth()
    
    const [product, setProduct] = useState([]);
    const [isDelete, setIsDelete] = useState(false);
    
    useEffect(() => {
        fetch(`https://serene-tundra-17861.herokuapp.com/orderProducts?email=${user.email}`)
            .then(res => res.json())
        .then(data=>setProduct(data))
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
    


    return (
        <div>
            <h2 style={{color:"goldenrod",margin:'40px'}}>My Orders : {product.length}</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Product Name</th>
                    <th>User Email</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            product.map(pd =><tr key={pd._id} pd={pd}>
                                <td>{ pd.name}</td>
                                <td>{pd.email}</td>
                                <td>{pd.status}</td>
                                <td><button onClick={()=>handleDeleteProduct(pd._id)} className="btn btn-danger ">Cancel</button></td>
                        
                                </tr>)
                        }
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;