// rfce 

import React from 'react';
import styled from '@emotion/styled';


const ContenedorHeader = styled.header`
    background-color: #26c6da;
    color: white;
    padding: 10px;
    font-weight: bold;
`
const TextoHeader = styled.h1 `
    font-size: 2rem;
    font-family: "Slabo 27px", serif;
    text-align: center;
`

function Header({titulo}) {
    return (
        <ContenedorHeader>
        <TextoHeader>{titulo}</TextoHeader>
            
        </ContenedorHeader>
        
    )
}

export default Header

