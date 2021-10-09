import React, {useState} from 'react';
import styled from '@emotion/styled';
import { obtenerDiferencia, obtenerMarca, obtenerPlan } from '../helper';



const Campo = styled.div `

    display: flex;
    margin-bottom: 1rem;
    align-items: center;

`
const Label = styled.label `

 flex: 0 0 100px;
 /* background-color: aquamarine; */

`
const Select = styled.select `

width: 100%;
padding: 1rem;
border: 1px solid gray;

`
const Radio = styled.input `

margin:0px 1rem;
`
const Button = styled.button `
    background-color: #00838f;
    color: white;
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;


    &:hover{
        cursor: pointer;
        background-color: #26c6da;
    }
`
const Alert = styled.div`
    background-color: red;
    color: white;
    width: 100%;
    text-align: center;
   padding: 1rem;
   margin-bottom: 20px;

`
function Formulario({setTotal, setResumen, setHide, setCargando}) {


    // GUARDAR DATOS 


    const [datos, setDatos] = useState({
        marca:"",
        year:"",
        plan:"",
    });

    const [error, setError] = useState(false)

    const {marca, year, plan}= datos;

    const GuardarDatos = e => {

        setDatos(
        {
            ...datos,
            [e.target.name]: e.target.value
        }
        )

    }

    // VALIDACION DEL FORMULARIO

    const cotizarSeguro = (e) => {
        
        e.preventDefault();


        if (marca === "" || year === "" || plan === "") {
            console.log("faltan fdatos");
            setError(true)
            return
        }
        setError(false)
        setHide(false)

        // una base de 2000 

        let resultado = 2000

        // OBTENER DIFERENCIA EN AÑOS 

       const diferencia = obtenerDiferencia(year);
       
       // POR CADA AÑO RESTAR 3% 
       
       resultado -= (resultado * (diferencia * 3))/100;
       
       
       // AMERICANO 15%
       // EUROPEO 30%
       // ASIATICO 5%
       
       resultado = obtenerMarca(marca) * resultado
       
       // BASICO AUMENTA 20% 
       // COMPLETO 50 % 
       
       resultado = parseFloat(obtenerPlan(plan) * resultado ).toFixed(2) 
       
       console.log(resultado);

        // TOTAL 
        
        // spiunner 
        setCargando(true);
        
        setTimeout(() => {
            setCargando(false);
            setHide(true)
            setTotal(resultado);
            setResumen(datos)
        }, 3000);

    }
    

    return (
       <div>
           <form action="" onSubmit={cotizarSeguro}>
               {error ? <Alert>Completar todos los datos </Alert> : null  }
               <Campo>
                   <Label htmlFor="">Marca</Label>
                   <Select name="marca" value={marca} onChange={GuardarDatos} >
                        <option value="">---Seleccione---</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                   </Select>
               </Campo>
               <Campo>
                   <Label htmlFor="">Año</Label>
                   <Select name="year" value={year} id="" onChange={GuardarDatos}>
                   <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                   </Select>
               </Campo>
               <Campo>
                   <Label htmlFor="">Plan</Label>
                   <Radio type="radio"  name="plan" checked={plan === "basico"} value="basico" onChange={GuardarDatos}/> Basico
               
                   <Radio type="radio"  name="plan" checked={plan === "completo"} value="completo" onChange={GuardarDatos}/> Completo
               </Campo>
               <Button type="submit" >Cotizar</Button>
           </form>
       </div>
    )
}

export default Formulario
