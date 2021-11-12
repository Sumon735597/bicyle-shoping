import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Rating from 'react-rating';

const ShowReview = () => {
    const [review, setReview] = useState([])
    const [isDelete, setIsDelete] = useState(true);
    
    useEffect(() => {
        fetch('https://serene-tundra-17861.herokuapp.com/review')
            .then(res => res.json())
            .then(data=>setReview(data))
    }, [])


    const handleDeleteReview = (id) => {
     
        const conformation=window.confirm('Are you Sure to Delete !!!')
    
        if (conformation) {
            fetch(`https://serene-tundra-17861.herokuapp.com/review/${id}`, {
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
        <section style={{marginTop:"100px",marginBottom:"200px"}}>
            <h1 style={{color:'purple',padding:"30px"}}>Our WebSite Review</h1>
            <div className="container">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>UserEmail</th>
                    <th>Comment</th>
                    <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            review.map(pd => <tr key={pd._id} pd={pd}>
                                <td>{ pd.email}</td>
                                <td>{ pd.comment}</td>
                                <td>
                                <p><Rating
                                            initialRating={pd.rating}
                                             emptySymbol={<i style={{color:'gold'}} className="far fa-star"></i>}
                                             fullSymbol={<i style={{color:'gold'}}  className="fas fa-star"></i>}
                                            /></p>
                                </td>
                                <td><button onClick={()=>handleDeleteReview(pd._id)} className="btn btn-danger ">Delete</button></td>
                                </tr>)
                    }
                </tbody>
            </Table>
            </div>
        </section>
    );
};

export default ShowReview;