import React,{useState, Fragment, useEffect} from 'react';
import Formulario from './Components/Formulario';
import Cita from './Components/Cita';
import './App.css';

function App() {

  //Citas en local Storage
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(!citasIniciales){
      citasIniciales = [];
    }
    //Arreglo de citas
    const [citas, guardarCitas] = useState(citasIniciales);
    const [idCita, setIdCita] = useState("");
    
    //Funcion use Effect para realizar ciertas operaciones cuando el state cambia
    useEffect(() => {
      if(citasIniciales){
        localStorage.setItem('citas', JSON.stringify(citas));
      }else{
        localStorage.setItem('citas', JSON.stringify([]));
      }
    }, [citas, citasIniciales] ); 

    //Función que tome las citas actuales y agregue la nueva 
    const crearCita = cita => {
      guardarCitas([
        ...citas,
        cita
      ]);
    }

    //Función que elimina una cita
    const eliminarCita = id => {
      const nuevasCitas = citas.filter(cita => cita.id !== id);
      guardarCitas(nuevasCitas);
    }
    //Funcion que modifica una cita
    const modificarCita = id => {
      console.debug(id);
      setIdCita(id);
    }

    const actualizarCitas = (cita) => {
      console.log(cita);
      const index = citas.findIndex(element => {
        return element.id === cita.id
      });
      const citasCopy = JSON.parse(JSON.stringify(citas));
      citasCopy[index] = cita;
      guardarCitas(citasCopy);
      setIdCita("");
    }

    //Mensaje Condicional
    const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';
  return (
    <Fragment>
       <h1>Administrador de pacientes</h1>
    <div className="container">
        <div className="row">
            <div className="one-half column">
              <Formulario 
                crearCita={crearCita}
                actualizarCitas={actualizarCitas}
                idCita={idCita}
                />
            </div>
            <br></br>
            <div className="one-half column">
              <h2>{titulo}</h2>
              {citas.map(cita =>(
                <Cita
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                  modificarCita={modificarCita}
                />  
              ))}
            </div>
        </div>
    </div>

    </Fragment>
      
   
  );
}

export default App;
