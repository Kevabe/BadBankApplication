import React from 'react';
import Card from './Components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import BankImage from './imagenes/bank.png';



const Home =() => {
   
    return(
        <Card
            txtcolor="black"
            header="BadBank Landing Page"
            title="Welcome to the Bank"
            text= "You can use this Bank"
            body={(<img src={BankImage} className="img-fluid" alt="Responsive image"/>)}
        
        />
    );
}
export default Home
