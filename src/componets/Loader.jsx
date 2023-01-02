import React from 'react';
import cat from "./backgrounds";
import {Spinner} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const Loader = () => {
    return (
        <div className='loader'>
            <Spinner />
           <img src={`${cat[4]}`} alt="" /> 
        </div>
    );
};

export default Loader;