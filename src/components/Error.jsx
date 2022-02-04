
const Error = ({mensaje}) => {
    return (
        <div>
             <div className ="alert alert-danger">
                         <p>{mensaje}</p>
                  </div>
        </div>
    )
}

export default Error
