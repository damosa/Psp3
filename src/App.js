import React,{useState, Fragment} from 'react';
import Formulario from './Components/Formulario';
import './App.css';

function App() {
    //Arreglo de citas
    const [citas, guardarCitas] = useState([]);

    //Función que tome las citas actuales y agregue la nueva 
    const crearCita = cita => {
      guardarCitas([
        ...citas,
        cita
      ]);
    }

  return (
    <Fragment>
       <h1>Administrador de pacientes</h1>
    <div className="container">
        <div className="row">
            <div className="one-half column">
              <Formulario 
                crearCita={crearCita}
                />
            </div>
            <div className="one-half-column">
              2
            </div>
        </div>
    </div>

    </Fragment>
      
   
  );
}

export default App;
