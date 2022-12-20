import { Component, ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const countries:any = {
    "AR": "Argentina",
    "SA": "Soudi Arabia",
    "BR": "Brazil",
    "TR": "Turkey",
    "IT": "Italy",
    "PK": "Pakistan",
    "PL": "Poland",
    "JP": "Japan",
    "NL": "Netherlands",
    "CO": "Colombia",
    "ES": "Spain",
    "AU": "Austria",
    "CA": "Canada",
    "CZ": "Czechia",
    "US": "United States",
    "GB": "Great Britain",
    "PR": "Puerto Rico",
    "DK": "Denmark"
};
const Card = (props:any) => { //fly_from, fly_to, date_from, date_to

    let fly_from = countries[props.fly_from];
    let fly_to = countries[props.fly_to];

    return(
        <div className='card'>
            <h1 className="text-center mb-5 mt-3">{props.competitionName}</h1>
        <div className='insidecard'>
            <hr />
            <h5 className="m-3 p-2">Fly from: &#160;<b>{fly_from}</b></h5>
            <h5 className="m-3 p-2">Fly to: &#160;&#160;&#160;&#160;&#160;&#160;<b>{fly_to}</b></h5>
            <br />
            <h5 className="m-3 p-2">From: &#160;<b>{props.date_from}</b></h5>
            <h5 className="m-3 p-2">To: &#160;&#160;&#160;&#160;&#160;&#160;<b>{props.date_to}</b></h5>
            <div className="d-flex justify-content-center m-4">
                <button type="button" className="btn btn-outline-dark">
                    <Link to={'/flights'} state={{
                        fly_from: `${props.fly_from}`,
                        fly_to: `${props.fly_to}`,
                        date_from: `${props.date_from}`,
                        date_to: `${props.date_to}`
                    }} className="sport-link">
                        <p style={{color:'black', margin: 0}} className="button-text-color" >Read more...</p>                                    
                    </Link>
                </button>
            </div>
        </div>
    </div>
    )
}

export default Card;