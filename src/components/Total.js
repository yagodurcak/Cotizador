import React from 'react';
import styled from '@emotion/styled';


const Final = styled.div`
    background-color: #26c6da;
    color: white;
    padding: 1rem;
    text-align: center;
    position: relative;

`



function Total({total}) {
    return (
        <Final>
            <h1>El total es: $ {total}</h1>
        </Final>
    )
}

export default Total
