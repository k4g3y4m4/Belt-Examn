import React from 'react'
import Card from './Card';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Dashboard = (props) => {
    //set project name and project date from props
    const projects = props.projects;
    
    


    
    return (
        <div className='container'>
            <h1>Project Manager</h1>
            <div className="card">
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className="table-info">Backlog</th>
                                <th className="table-warning">In Progress</th>
                                <th className="table-success">Done</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {
                                    projects.map(project => {
                                        if(project.statusProject === 'Backlog'){
                                            return <Card key={project.id} project={project} />
                                        }
                                    })
                                    }
                                </td>
                                <td>
                                    {
                                    projects.map(project => {
                                        if(project.statusProject === "In Progress"){
                                            return <Card key={project.id} project={project} />
                                        }
                                    })
                                    }
                                </td>
                                <td>
                                    {
                                    projects.map(project => {
                                        if(project.statusProject === 'Done'){
                                            return <Card key={project.id} project={project} />
                                        }
                                    })
                                    }
                                </td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='card-footer'>
                    <Link to='/newProject' className='btn btn-primary'>Add Project</Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;