import { useState,useEffect } from 'react';
import CerrarBoton from '../img/cerrar.svg';
import Mensaje from './Mensaje';


const Modal = ({setModal,animarModal,guardarGasto,gastoEditar}) => {

  const [mensaje,setMensaje]=useState('');

  const [nombre,setNombre]=useState('');
  const [cantidad,setCantidad]=useState('');
  const [categoria,setCategoria]=useState('');

  useEffect( ()=>{
      if(Object.keys(gastoEditar).length>0){
        setNombre(gastoEditar.nombre);
        setCantidad(gastoEditar.cantidad);
        setCategoria(gastoEditar.categoria);
      }
  },[])

    const ocultarModal=() => {
      setModal(false);
      setAnimarModal(false);
    };

    const handleSubmit = e=>{
      e.preventDefault();//para prevenir la accion por default enviar formulario
      
      if([nombre,cantidad,categoria].includes('')){

        setMensaje('Todos los Campos son obligatorios');
        setTimeout(()=>{
          setMensaje('');
        },2000)
        return;
      }
      guardarGasto({nombre,cantidad,categoria})
    }

  return (

    <div className="modal">
         <div className="cerrar-modal">
            <img
            src={CerrarBoton} 
            alt='cerrar modal'
            onClick={ocultarModal}
                />
         </div>
         <form
         onSubmit={handleSubmit}
          className={`formulario ${animarModal ? "animar":"cerrar"}`}>
          
          <legend>Nuevo gasto</legend>

          {mensaje &&<Mensaje tipo="error">{mensaje}</Mensaje> }

          <div className='campo'>
            <label htmlFor='nombre'>Nombre Gasto</label>
            <input id='nombre'  type='text'
             placeholder='Añade el nombre Del Gasto'
             value={nombre}
             onChange={ valor =>setNombre(valor.target.value)}/>
          </div>
          <div className='campo'>
            <label htmlFor='cantidad'>Cantidad</label>
            <input
             value={cantidad}
             onChange={ e =>setCantidad(Number(e.target.value))} id='cantidad'  type='number' placeholder='Añade cantidad Gasto'/>
          </div>
          <div className='campo'>
            <label htmlFor='categoria'>Categoria</label>
            <select value={categoria} 
              onChange={loQueIngrese=> setCategoria(loQueIngrese.target.value)} 
              id='categoria'>

              <option value="">--Seleccione -- </option>
              <option value="ahorro">Ahorro </option>
              <option value="comida">Comida </option>
              <option value="casa">Casa </option>
              <option value="gastos">Gastos Varios </option>
              <option value="ocio">Ocio </option>
              <option value="salud">Salud </option>
              <option value="suscripciones">Suscripciones </option>
            </select>
          </div>
          <input type='submit' value={"Añadir Gasto"}/>
        
         </form>
    </div>
  )
}

export default Modal