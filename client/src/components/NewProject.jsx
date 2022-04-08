import React, { useState } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
const NewProject = () => {
    // mantener el control de lo que se escribe a través del gancho useState
    const [projectName, setProjectName] = useState('');
    const [errorprojectName, setErrorprojectName] = useState('');
    const [projectDate, setProjectDate] = useState('');
    const [errorprojectDate, setErrorprojectDate] = useState(''); 
    const [redirectReference, setRedirectReference] = useState(false);
    //gestor cuando se envía el formulario
    const onSubmitHandler = e => {
        //evitar el comportamiento por defecto de submit
        e.preventDefault();

        //validar el formulario
        if(projectName.trim() === ''){
            setErrorprojectName('Project name is required');
            if(projectName.length < 3){
                setErrorprojectName('Project name must be at least 3 characters');
            }
            if(projectDate.trim() === ''){
                setErrorprojectDate('Project date is required');
            }

            return;
        }

        if(projectDate.trim() === ''){
            setErrorprojectDate('Project date is required');
            return;
        }
        //enviar el formulario

        //hacer una petición POST para crear una nueva persona
        axios.post('http://localhost:8000/api/projects', {
            name: projectName,
            date: projectDate
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err)
            )
            
        //redireccionar a la página principal
        setRedirectReference(true);
    }

    //redireccionar a la página principal
    if(redirectReference){
        return <Redirect to="/"/>
    }

    //onChange para actualizar project Name and project Date
    return (
        <div className="container">
            <h1>Project Manager</h1>
            <Link to='/' className=''>Back to Dashboard</Link>
            <div className="row justify-content-center">
                <div className="col-md-6 ">
                    <div className="card">
                        <div className="card-header">
                            <h3>New Project</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={onSubmitHandler}>
                                <label for="inputProjectName" className="col-sm-4 col-form-label">Project</label>
                                <input type="text" className='col-sm-8' onChange = {(e)=>setProjectName(e.target.value)} value={projectName}/>
                                {
                                    errorprojectName.length > 0 && <span className="text-danger">{errorprojectName}</span>
                                }

                                <label for="inputProjectDate" className="col-sm-4 col-form-label">Due Date</label>
                                <input type="date" className='col-sm-8 text-center' onChange = {(e)=>setProjectDate(e.target.value)} value={projectDate}/>
                                {
                                    errorprojectDate.length > 0 && <span className="text-danger">{errorprojectDate}</span>
                                }
            
                                <button type="submit" className="btn btn-primary">Plan Project</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
       
            

           
    

        
    )
}

export default NewProject;