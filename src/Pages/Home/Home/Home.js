import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import BikeService from '../BikeService/BikeService';
import Products from '../Products/Products';
import ShowReview from '../ShowReview/ShowReview';


const Home = () => {
    return (
        <div style={{background:"#ECEEEE"}}>
            <Banner></Banner>
            <Products></Products>
            <BikeService></BikeService>
            <ShowReview></ShowReview>
        </div>
    );
};

export default Home;