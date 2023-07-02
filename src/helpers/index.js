

export const generarId =()=>{
    const random=Math.random().toString(36).substring(2);
    const fecha =Date.now().toString(36);

    return random + fecha;
}

export const formatiarFecha = (fecha)=>{
    const fechaNueva = new Date(fecha);
    const misOpciones ={
        year : 'numeric',
        month: 'long',
        day : '2-digit',
    }
    //toLocaleDateString recibe el lenguaje y una configuracion a mostrar en este caso es misOpciones
    return fechaNueva.toLocaleDateString('es-ES',misOpciones)
}