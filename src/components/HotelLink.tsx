import axios from "axios";
import { Component, ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const HotelLink = (props:any) => { //props.competitionId
    
    const [link, setLink] = useState("")


    useEffect(() => {
        (
          async () => {
            const options = {
                url: 'https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation',
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': 'api_key',
                  'X-RapidAPI-Host': 'api_host'
                },
                params: {
                  'cityName': props.city,
                  'countryName': props.country
                }  
            };
 
            axios(options).then(response => {
                setLink(response.data.link);
            });
          }
        )();
      }, [])

    return(
      <a href={link}>Book hotel</a>
    )
}

export default HotelLink;
