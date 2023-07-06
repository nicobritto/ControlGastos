import React from 'react'
import Gasto from './Gasto'



const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados }) => {
  return (
    <div className='listados-gastos contenedor'>


      {filtro ? ( //si filtro hay algo o sea es true se recorre gastosFiltrados sino gastos
        <>
          <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay Gastos en esta categoria '}</h2>
          {gastosFiltrados.map((gasto) => (

            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
         <h2>{gastos.length ? 'Gastos' : 'No hay Gastos Aun'}</h2>
            {gastos.map((gasto) => (
              <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
              />
            ))}
        </>
      )}


    </div>
  )
}

export default ListadoGastos