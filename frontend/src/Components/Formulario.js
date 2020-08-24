import React, {Fragment, useState, useEffect} from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita, idCita, actualizarCitas}) => {

    //Crear State de Citas
        const [cita, actualizarCita]= useState({
            mascota: '',
            propietario:'',
            fecha: '',
            hora:'',
            sintomas:''
        });

        //Crear state de Error
        const[error, actualizarError]= useState(false)

        //Funcion que se ejecuta cada que algún usuario escribe en un input
        const actualizarState= e => {
            actualizarCita({
                ...cita, 
                [e.target.name]: e.target.value
            })
        }

        //Extraer los valores
        const {mascota, propietario, fecha, hora, sintomas}= cita;

        //Cuando el usuario presiona agregar cita 
        const submitCita = e =>{
            e.preventDefault();

             //Validar
             if(mascota.trim()=== '' || propietario.trim()=== '' || fecha.trim()=== '' || hora.trim()=== '' || sintomas.trim()=== ''){
                 actualizarError(true);  
                 return;
             }
             //actualizar Error
             actualizarError(false);
             //Asignar un ID 
             if(idCita === "") {
                cita.id= shortid();
                //Crear la cita
                crearCita(cita);
             } else {
                actualizarCitas(cita);
             }
             //Reiniciar el Form 
             actualizarCita({
                mascota: '',
                propietario:'',
                fecha: '',
                hora:'',
                sintomas:''
             })
        }

    useEffect(() => {
        if(idCita !== ""){
            const citas =  JSON.parse(localStorage.getItem('citas'));
            const cita = citas.filter(cita => {
                return cita.id === idCita
            })
            actualizarCita(cita[0])
        }
        return () => {
            
        }
    }, [idCita])

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className="alerta-error">Todos los campos son Obligatorios </p> 
            : null}
            <form onSubmit={submitCita}>
                <label>Nombre Mascota:</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño:</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width" 
                    onChange={actualizarState}
                    value={fecha}
                />
                 <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width" 
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                   className="u-full-width" 
                   name="sintomas"
                   onChange={actualizarState}
                   value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >{idCita !== "" ? "Modificar" : "Agregar"}</button>

            </form>
            
        </Fragment>
     );
}
  Formulario.propTypes={
      crearCita: PropTypes.func.isRequired,
      idCita: PropTypes.string
  }
export default Formulario;