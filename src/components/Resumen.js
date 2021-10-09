import React from 'react';
import styled from '@emotion/styled';

const ContenedorResumen = styled.div`

    background-color: #00838f;
    position: relative;
    color: white;
    text-align: center;
    
    padding: 1rem;
    margin: 20px 0px;
    /* width: 100%; */
`

const Detalle = styled.p `

    font-weight: 600;
    text-transform: capitalize;
`

function Resumen({resumen}) {
    return (
        <ContenedorResumen>
            <h1>Resumen de Cotización</h1>

            <Detalle> Marca : {resumen.marca}</Detalle>
            <Detalle> Año : {resumen.year}</Detalle>
            <Detalle> Plan : {resumen.plan}</Detalle>
        </ContenedorResumen>
    )
}

export default Resumen
