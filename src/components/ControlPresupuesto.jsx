import {useEffect,useState} from 'react'


const ControlPresupuesto = ({presupuesto,gastos}) => {

    const [disponible,setDisponible]=useState();
    const [gastado,setGastado]=useState();

    
    useEffect(() => {
        const totalGastado=gastos.reduce((total,gasto)=>gasto.cantidad + total,0 )
    
        const totalDisponible=presupuesto-totalGastado;
        setDisponible(totalDisponible);

        setGastado(totalGastado);
    },[gastos]);



return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <p>Grafica</p>

        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto : </span> ${presupuesto}
            </p>
            <p>
                <span>Disponible : </span> ${disponible}
            </p>
            <p>
                <span>Gastado : </span> ${gastado}
            </p>
        </div>
    </div>
)
}

export default ControlPresupuesto