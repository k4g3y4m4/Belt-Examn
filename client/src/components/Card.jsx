import React,{useState} from "react";
import axios from "axios";


const Card = (props) => {
    var id = props.project._id;
    var projectName = props.project.name;
    //only get 10 characters of the project date
    var projectDate = props.project.date.substring(0,10);
    var  projectStatus = props.project.statusProject;
       

    const onSubmitHandler = e => {
        e.preventDefault();
        if(projectStatus === "Backlog"){
            axios.put(`http://localhost:8000/api/updateProject/${id}`, {
                statusProject: "In Progress"
            })
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            });
        }
        else if(projectStatus === "In Progress"){
            axios.put(`http://localhost:8000/api/updateProject/${id}`, {
                statusProject: "Done"
            })
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            });
        }else if(projectStatus === "Done"){
            axios.delete(`http://localhost:8000/api/deleteProject/${id}`)
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            }
            );
        }

        }
    

    return (
        <div className="card">
            <div className="card-body">
                <div className="card-title">
                    <h3>{projectName}</h3>
                </div>
                <div className="card-text">
                    <div className="row">
                        <div className="col">
                            <p>Due Date: {projectDate}</p>
                        </div>
                        {
                            projectStatus === "Backlog" ? 
                                <div className="col">
                                    <button className="btn btn-warning" onClick={onSubmitHandler}>Start Project</button>
                                </div>: 
                            projectStatus === "In Progress" ? 
                                <div className="col">
                                    <button className="btn btn-success"onClick={onSubmitHandler} >Move to Complete</button>
                                </div>: 
                            projectStatus === "Done" ? 
                                <div className="col">
                                    <button className="btn btn-danger"onClick={onSubmitHandler} >Remove Project</button>
                                </div>: null
                        }              
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;