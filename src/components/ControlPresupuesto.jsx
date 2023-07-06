import { useEffect, useState } from 'react';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ControlPresupuesto = ({ presupuesto, gastos,setGastos,setPresupuesto,setIsValidPresupuesto }) => {

    const [disponible, setDisponible] = useState();
    const [gastado, setGastado] = useState();
    const [porcentaje, setPorcentaje] = useState(0);
    
    const handleResetApp =()=>{
        const resultado = confirm('Deseas Reniciar?');
        if(resultado){
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }
    }


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
                    pathColor: porcentaje> 100 ? '#DC2626' : '#3B82F6',
                    trailColor:'#F5F5F5',
                    textColor:'#3B82F6'
                })}
                value={porcentaje}
                text={`${porcentaje}% Gastado`}
            />

            <div className='contenido-presupuesto'>
                <button className='reset-app'
                        type='button'
                        onClick={handleResetApp}>
                        Resetear App
                </button>
                <p>
                    <span>Presupuesto : </span> ${presupuesto}
                </p>
                <p className={`${disponible < 0 ? 'negativo' : '' }`}>
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