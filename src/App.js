
// import './App.css';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import React, {useState} from 'react';
import Resumen from './components/Resumen';
import Total from './components/Total';
import Spinner from './components/Spinner';


const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const ContenedorForm = styled.div`
  background-color: white;
  padding: 3rem;

`


function App() {

  const [total, setTotal] = useState(0)
  const [resumen, setResumen] = useState({})
  const [hide, setHide] = useState(false)
  const [cargando, setCargando] = useState(false)



  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />

      <ContenedorForm>
        <Formulario setTotal={setTotal} setResumen={setResumen} setHide={setHide} setCargando={setCargando}/>


        {cargando ? <Spinner/> : null}
        {hide ? <Resumen resumen={resumen} /> : null }
        {hide ? <Total total={total} /> : null }

        
      </ContenedorForm>
    </Contenedor>
  );
}

export default App;
