import axios from "axios";
import { Component, ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const BasketballCard = (props:any) => { //props.competitionId
    
    console.log(props.competitionId);

    useEffect(() => {
        (
          async () => {
            //competition detaills
            const {data} = await axios({
                method: 'GET',
                url: `https://basketball-data.p.rapidapi.com/tournament/info`,
                params: {tournamentId: 89},
                headers: {
                  'X-RapidAPI-Key': '9b381a0de8mshc7bf7ed5988c10dp110c7djsn01898af74e2a',
                  'X-RapidAPI-Host': 'basketball-data.p.rapidapi.com'
                }
            });  
            console.log(data);
          }
        )();
      }, [])


    return(
        <div className='card'>
        <h2>Competition Name</h2>
        <div className='insidecard'>
            <hr />
            <div className="d-flex justify-content-center m-4">
                <button type="button" className="btn btn-outline-dark">
                    <Link to={'/volleyball'} className="sport-link">
                        <p style={{color:'black', margin: 0}} className="button-text-color" >Read more...</p>                                    
                    </Link>
                </button>
            </div>
        </div>
    </div>
    )
}

export default BasketballCard;