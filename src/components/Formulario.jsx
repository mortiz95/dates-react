import { useState, useEffect } from "react"
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

const [nombre, setNombre] = useState('')
const [propietario, setPropietario] = useState('')
const [email, setEmail] = useState('')
const [fecha, setFecha] = useState('')
const [sintomas, setSintomas] = useState('')

const [error, setError] = useState(false)

useEffect(() => { // Pone en los input los valores del edit
    if(Object.keys(paciente).length > 0){
       setNombre(paciente.nombre)
       setPropietario(paciente.propietario)
       setEmail(paciente.email)
       setFecha(paciente.fecha)
       setSintomas(paciente.sintomas)
    }
}, [paciente])

const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
}

 const handleSubmit = (e) =>{
    e.preventDefault()

    //Validacion
    if([nombre, propietario, email, fecha, sintomas].includes(''))
    {
         setError(true)
         return;
    } 

    setError(false)

    //Objeto paciente p/ almacenrar la info del
    //formulario en un obj a su vez almc en un array
    
    const objetoPaciente = {
        nombre, 
        propietario,
        email,
        fecha,
        sintomas
    }

    if(paciente.id){
        //Hay un paciente para editar
        objetoPaciente.id = paciente.id
        const pacientesActualizados = pacientes.map( pacientesState => paciente.id 
            === pacientesState.id ? objetoPaciente : pacientesState )
        
        console.log(pacientesActualizados)
        setPacientes(pacientesActualizados)
         setPaciente({})

    } else{
         // Agregando un nuevo paciente
         objetoPaciente.id = generarId()
         setPacientes([...pacientes, objetoPaciente])
    }
    
   
   // Reiniciar form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

 }

    return (
        <div className="p-2 mt-3">
            <h2 className="text-center fw-bold">Patient monitoring</h2>
            <p className="mt-2 text-center text-secondary"> Add & Edit a new patient</p>

            <form 
                 className="bg-white p-4 rounded-3 shadow"
                 onSubmit={handleSubmit}
            >
                {error && <Error mensaje="Todos los campos son obligatorios"/>
                   
                    }
                    <div className="mb-3 mt-3">
                        <label htmlFor="mascota" className="form-label">Pet name:</label>
                        <input 
                              type="text" 
                              className="form-control" 
                              id="mascota"
                              placeholder="Enter pet name" 
                              value={nombre}
                              onChange={ (e) => setNombre(e.target.value)}
                              />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="propietario" className="form-label">Owner name:</label>
                        <input 
                              type="text" 
                              className="form-control" 
                              id="propietario" 
                              placeholder="Enter pet owner name" 
                              value={propietario}
                              onChange={ (e) => setPropietario(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input 
                              type="email" 
                              className="form-control" 
                              id="email" 
                              placeholder="Enter email"
                              value={email}
                              onChange={ (e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="alta" className="form-label">Discharge date:</label>
                        <input 
                              type="date" 
                              className="form-control" 
                              id="alta" 
                              value={fecha}
                              onChange={ (e) => setFecha(e.target.value)}
                              
                        />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="sintomas" className="form-label">Synthoms:</label>
                        <textarea 
                                id="sintomas" 
                                className="w-100"
                                value={sintomas}
                                onChange={ (e) => setSintomas(e.target.value)}
                        />
                    </div>
                    
                    <div className="d-grid">
                        <button 
                            type="submit" 
                            className="btn btn-primary btn-block"> {paciente.id ? 'Save edit' : 'Add'  }
                        </button> 
                    </div>
                   

                    </form>
        </div>
    )
}

export default Formulario

