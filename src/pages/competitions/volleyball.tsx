import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

const VolleyballCompetition = (props:any) => {
      
    return(
        <>
            <Header>{props.sport} Competitions</Header>
            <div className='flexbox'>
              <Card fly_from={"AR"} fly_to={"SA"} date_from={"02/01/2023"} date_to={"02/02/2023"}/> 
              <Card fly_from={"BR"} fly_to={"TR"} date_from={"12/12/2022"} date_to={"13/12/2022"}/> 
              <Card fly_from={"IT"} fly_to={"PK"} date_from={"21/12/2022"} date_to={"22/12/2022"}/>
            </div>
        </>    
    );
};

export default VolleyballCompetition;