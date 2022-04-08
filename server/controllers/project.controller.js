const {Project} = require('../models/project.model');

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

//get all projects
module.exports.getAllProjects = (request, response) => {
    Project.find()
        .then(projects => {
            response.json(projects);
        })
        .catch(err => {
            response.json(err);
        });
}

module.exports.createProject = (request, response) => {
    const project = new Project({
        name: request.body.name,
        date: request.body.date,
        //status project take default value
        statusProject: "Backlog"
    });
    project.save()
        .then(() => {
            response.json({
                message: "Project created successfully",
                data: project
            });
        })
        .catch(error => {
            response.json({
                error: error
            });
        });
}

//get project by id
module.exports.getProjectById = (request, response) => {
    Project.findById(request.params.id)
        .then(project => {
            response.json({
                message: "Project found successfully",
                data: project
            });
        })
        .catch(err => {
            response.json(err);
        });
}



//update statusProject by id
module.exports.updateProject = (request, response) => {
    Project.findOneAndUpdate({_id: request.params.id}, {$set: {statusProject: request.body.statusProject}}, {new: true})
        .then(project => {
            response.json({
                message: "Project updated successfully",
                data: project
            });
        }
        )
        .catch(err => {
            response.json(err);
        }
        );
}

//delete project by id
module.exports.deleteProject = (request, response) => {
    Project.deleteOne({_id: request.params.id})
        .then(project => {
            response.json({
                message: "Project deleted successfully",
                data: project
            });
        })
        .catch(err => {
            response.json(err);
        });
}