import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <p>Grafica</p>

        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto : </span> ${presupuesto}
            </p>
            <p>
                <span>Disponible : </span> ${0}
            </p>
            <p>
                <span>Gastado : </span> ${0}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto