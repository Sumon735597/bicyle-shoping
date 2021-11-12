import React from 'react';
import banner from '../../../images/banner.png'

const BikeService = () => {
    return (
        <section style={{
            background: "#2F4C50",
            // minHeight: 500,
            // height: '100vh',
            alignItems: 'center',
            display:'flex'

            
        }}>
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid py-5" src={banner}  alt="" />
                </div>
                <div className="col-md-6">
                    <div className="row py-5 mb-5">
                        <h1 style={{fontSize:'70px',fontWeight:'900',color:'whitesmoke'}}>Bike service <br/>
                            & repair</h1>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 style={{color:'white'}}><span style={{color:'#DE453E'}}>01.</span> Tune-ups & <br/> builds</h3>
                                <p  style={{color:'white'}}>We have all the necessary parts to create a bike that fits you perfectly</p>
                            </div>
                            <div className="col-md-6">
                                <h3  style={{color:'white'}}><span style={{color:'#DE453E'}}>03.</span> Adjust & <br/> install</h3>
                                <p style={{color:'white'}}>Need a bike repair? We offer a range of spare parts and quality service</p>
                            </div>
                        </div>
                        <div className="row py-3">
                        <div className="col-md-6">
                                <h3  style={{color:'white'}}><span style={{color:'#DE453E'}}>02.</span>Personal bike <br/> fit</h3>
                                <p style={{color:'white'}}>Adjusment of height, pedals, handlebar for the most comfortable ride</p>
                            </div>
                            <div className="col-md-6">
                                <h3 style={{color:'white'}}><span style={{color:'#DE453E'}}>04.</span> Free delivery</h3>
                                <p style={{color:'white'}}>Choose a bike at our shop and get free delivery to any location in the city</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BikeService;