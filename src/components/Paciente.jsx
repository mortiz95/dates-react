
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
   
   const {nombre ,propietario, email, fecha, sintomas, id} = paciente 
  
   const handleEliminar = () => {

        const resp = confirm('Are you sure do you want delete it?')
        
        if(resp){
            eliminarPaciente(id)
        }
    }


    return (
        <div className="p-4 rounded-3 border shadow mb-3" > 
            <p className="text-uppercase fw-bold"> Pet name: {''}
                <span className="text-capitalize fw-normal">
                       {nombre}
                </span>
            </p>
            <p className="text-uppercase fw-bold"> Owner name: {''}
                <span className="text-capitalize fw-normal">
                        {propietario}
                </span>
            </p>
            <p className="text-uppercase fw-bold"> Email: {''}
                <span className="text-lowercase fw-normal"> 
                       {email}
                </span>
            </p>
            <p className="text-uppercase fw-bold"> Discharge date: {''}
                <span className="text-capitalize fw-normal">
                        {fecha}
                </span>
            </p>
            <p className="text-uppercase fw-bold"> Synthoms: {''}
                <span className="text-capitalize fw-normal">
                        {sintomas}
                </span>
            </p>

            <div className="justify-content-between d-flex">
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={()=> setPaciente(paciente)}
                    >Edit</button>
                <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick={handleEliminar}
                    >Delete</button>
            </div>

        </div>
    )
}

export default Paciente
