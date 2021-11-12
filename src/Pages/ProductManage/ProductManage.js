import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const ProductManage = () => {

    const [products, setProducts] = useState([])
    const [isDelete, setIsDelete] = useState(null);

    useEffect(() => {
        fetch('https://serene-tundra-17861.herokuapp.com/products')
            .then(res => res.json())
            .then(data=>setProducts(data))
    }, [isDelete])


    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://serene-tundra-17861.herokuapp.com/products/${id}`,{
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount) {
            alert('Delete SuccessFully')
            setIsDelete(true);
          } else {
            setIsDelete(false);
          }
        });
    }



    return (
        <div>
            <h1>Product Manage</h1>
            <h3>Total Product: {products.length}</h3>
            <section className="mb-5 mt-5">
            <div className="container">
                <div className="row mt-5 pt-5">
                    {
                        products.map((product,index)=>
                            <div key={product._id} product={product} className="col-md-4 mb-5 text-center">
                                <div className="card shadow-sm">
                                    <img height='300px' className="mx-3" src={product.img} alt=""/>
                                    <div className="card-body">
                                        <h5>{product.name}</h5>
                                        <p className="card-text text-secondary mt-4">{product.price}</p>
                                        <p><Rating
                                            initialRating={product.rating}
                                             emptySymbol={<i style={{color:'gold'}} className="far fa-star"></i>}
                                             fullSymbol={<i style={{color:'gold'}}  className="fas fa-star"></i>}
                                            /></p>
                                        
                                        
                                             <button onClick={()=>handleDelete(product._id)} className="btn btn-danger">Delete Product</button>
                                        
                                    </div>  
                                </div>
                            </div>
                        )
                    }
                </div>
                <div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default ProductManage;