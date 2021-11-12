
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Products = () => {


    const [products,setProducts]=useState([])

    useEffect(() => {
        fetch('https://serene-tundra-17861.herokuapp.com/products')
            .then(res => res.json())
            .then(data=>setProducts(data))
    }, [])
    

    return (
        <section className="mb-5 mt-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-uppercase text-primary">Our products</h5>
                    <h1>Featured Products</h1>
                </div>
                <div className="row mt-5 pt-5">
                    {
                        products.slice(0,6).map((product,index)=>
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
                                         <Link to={`/placeOrders/${product._id}`}>
                                             <button className="btn btn-success">Buy Now</button>
                                        </Link>
                                    </div>  
                                </div>
                            </div>
                        )
                    }
                </div>
                <div>
              
            <button style={{backgroundColor:'#DF453E',border:'none',padding:'40px'}}><Link style={{textDecoration:'none',fontSize:'30px',color:'whitesmoke'}} to="/viewAll">View All Products</Link></button>
                </div>
            </div>
        </section>
    );
};

export default Products;