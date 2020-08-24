import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita, modificarCita}) => (
    <div className="cita">
         <p>Mascota: <span>{cita.mascota}</span></p>
         <p>Propietario: <span>{cita.propietario}</span></p>
         <p>Fecha: <span>{cita.fecha}</span></p>
         <p>Hora: <span>{cita.hora}</span></p>
         <p>Síntomas: <span>{cita.sintomas}</span></p>
         <button
            className="button eliminar u-full-width"
            onClick={()=> eliminarCita(cita.id)}
         >Eliminar</button>
         <button
            className="button modificar u-full-width"
            onClick={()=> modificarCita(cita.id)}
         >Modificar</button>
    </div>
);

Cita.propTypes ={
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired,
    modificarCita: PropTypes.func.isRequired
}
     
 
export default Cita;