import Paciente from "./Paciente"

const ListadoPacientes = ( { pacientes, setPaciente, eliminarPaciente } ) => {

    return (
        <div className="p-2 mt-3">
      
         { pacientes && pacientes.length ?
            (
                <>
                    <div>
                        <h2 className="text-center fw-bold">Patient list</h2>
                        <p className="text-center text-secondary">
                            Manage your patients and appointments
                        </p>
                    </div>

                    <div className="scroll">

                    { pacientes.map( paciente => (
                            <Paciente
                            key = {paciente.id}
                            paciente = {paciente}   
                            setPaciente = {setPaciente} 
                            eliminarPaciente = {eliminarPaciente}               
                            /> 
                    ))}
                                    
                    </div>
                </>

            ) : (
                <>
                    <div>
                        <h2 className="text-center fw-bold">Theres no patients</h2>
                        <p className="text-center text-secondary">
                            Start adding new patients and they will appear in this place
                        </p>
                    </div>
             </>
            )
              
            }
            
        </div>
    )
}

export default ListadoPacientes




