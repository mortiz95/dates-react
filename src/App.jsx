import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

// En localStorage no se puede guardar arrays, solo string
function App() {

const [pacientes, setPacientes] = useState([]);
const [paciente, setPaciente] = useState({});

useEffect(() => {
 
   const obteneLS = () => {
    // JSON.parse : convierte a objetc
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; // si no hay nada, agrega un array vacio
    setPacientes(pacientesLS)
   }

   obteneLS()

}, []) // [] si pasamos vacio quiere decir que solo se ejecuta una vez
       // Controlamos si existe info en pacientes
       // dentro localStorage para que no se formatee al reiniciar la pag

useEffect(() => {
  localStorage.setItem('pacientes', JSON.stringify(pacientes))
}, [pacientes])


const eliminarPaciente = id => {
   //Filter: no muta el array original,sino que crea uno nuevo
  const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
  setPacientes(pacientesActualizados)
}

  return (
    <div className="container">
      <Header />
      <div className="row">
         <div className="col-md-6 col-lg-5">
            <Formulario
              pacientes = {pacientes}
              setPacientes = {setPacientes}
              paciente = {paciente}
              setPaciente = {setPaciente}
            />
         </div>
         <div className="col-md-6 col-lg-7">
            <ListadoPacientes
              pacientes={pacientes}
              setPaciente= {setPaciente}
              eliminarPaciente = {eliminarPaciente}
            />
         </div>
          
          
      </div>
     
    </div>
  )
}

export default App
