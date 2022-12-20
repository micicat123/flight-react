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
                  'X-RapidAPI-Key': '9b381a0de8mshc7bf7ed5988c10dp110c7djsn01898af74e2a',
                  'X-RapidAPI-Host': 'best-booking-com-hotel.p.rapidapi.com'
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