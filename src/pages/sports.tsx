import React, { Component, SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const SportCompetitions = () => {

    return(
        <>
            <Header>Sports</Header>
            <div className='flexbox'>
                <div className='card'>
                    <h2>Volleyball</h2>
                    <div className='insidecard'>
                        <img src={require('../pictures/volleyball.jpeg')} height="250" alt="" />
                        <hr />
                        <div className="d-flex justify-content-center m-4">
                            <button type="button" className="btn btn-outline-dark">
                                <Link to={'/volleyballCompetition'} className="sport-link">
                                    <p style={{color:'black', margin: 0}} className="button-text-color" >Read more...</p>                                    
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <h2>Basketball</h2>
                    <div className='insidecard'>
                        <img src={require('../pictures/basketball.jpg')} height="250" alt="" />
                        <hr />
                        <div className="d-flex justify-content-center m-4">
                            <button type="button" className="btn btn-outline-dark">
                                <Link to={'/basketballCompetition'} className="sport-link">
                                    <p style={{color:'black', margin: 0}} className="button-text-color">Read more...</p>                                    
                                </Link>
                            </button>
                        </div>                    
                    </div>
                </div>
                <div className='card'>
                    <h2>Baseball</h2>
                    <div className='insidecard'>
                        <img src={require('../pictures/baseball.jpg')} height="250" alt="" />
                        <hr />
                        <div className="d-flex justify-content-center m-4">
                            <button type="button" className="btn btn-outline-dark">
                                <Link to={'/baseballCompetition'} className="sport-link">
                                    <p style={{color:'black', margin: 0}} className="button-text-color">Read more...</p>                                    
                                </Link>
                            </button>
                        </div>                          
                    </div>
                </div>
            </div>
        </>    
    );
};

export default SportCompetitions;