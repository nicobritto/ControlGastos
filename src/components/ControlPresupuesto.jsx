import { useEffect, useState } from 'react';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ControlPresupuesto = ({ presupuesto, gastos }) => {

    const [disponible, setDisponible] = useState();
    const [gastado, setGastado] = useState();
    const [porcentaje, setPorcentaje] = useState(0);


    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGastado;
        //calcular el porcetaje gastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);



        setDisponible(totalDisponible);
        setGastado(totalGastado);
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje);
        }, 500)

    }, [gastos]);



    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <CircularProgressbar
                styles={buildStyles({
                    pathColor:'#3B82F6',
                    trailColor:'#F5F5F5'
                })}
                value={porcentaje}
            />

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