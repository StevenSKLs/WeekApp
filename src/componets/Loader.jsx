import React from 'react';
import cat from "./backgrounds";
import {Spinner} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const Loader = () => {
    return (
        <div className='loader'>
            
            <div className='loaderImg'>
                <img src={`${cat[4]}`} alt="" /> 
            </div>
            <div>
                <p style={{fontSize:"2rem"}}>Loading</p><Spinner />
            </div>
           
        </div>
    );
};

export default Loader;