import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HotelLink from '../components/HotelLink';

const Flights = (props:any) => {//fly_from, fly_to, date_from, date_to

    const location = useLocation();
    const [flights, setFlights] = useState([])
    const id = 0;
    useEffect(() => {
      (
        async () => {

            const options = {
                url: 'https://api.tequila.kiwi.com/v2/search',
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'apikey': 'RR4--s7kkNiBJ5gJe4DlXa_kXppE7C0A'
                },
                params: {
                  'fly_from': location.state.fly_from,
                  'fly_to': location.state.fly_to,
                  'date_from': location.state.date_from, 
                  'date_to': location.state.date_to 
                }  
            };
 
            axios(options).then(response => {
                const temp = response.data.data.slice(0, 1);
                setFlights(temp);
            });

        }
      )();
      }, [])
    
    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col">Distance</th>
                        <th scope="col">Price</th>
                        <th scope="col">Link</th>
                        <th scope="col">Best hotel</th>
                    </tr>
                </thead>
                <tbody>
                        {flights.map((flight:any) => {
                            return(
                                <tr key={flight.id}>
                                    <td>{flight.countryFrom.name} ({flight.cityFrom})</td>
                                    <td>{flight.countryTo.name} ({flight.cityTo})</td>
                                    <td>{flight.distance}m</td>
                                    <td>{flight.price}</td>
                                    <td><a href={'https://www.kiwi.com/en/booking?token=' + flight.booking_token}>Book flight</a></td>
                                    <td><HotelLink country={flight.countryTo.name} city={flight.cityTo} /> </td>
                                </tr> 
                            );
                        })}
                </tbody>
            </table>
        </>    
        
    );
};

export default Flights;