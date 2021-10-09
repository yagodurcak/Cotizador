import React from 'react';
import "./Spinner.css";

import styled from '@emotion/styled';


const Caja= styled.div`

    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0px;

`


function Spinner() {
    return (

  
        <Caja>
            <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
                  </div>
        </Caja>
    )
}

export default Spinner
