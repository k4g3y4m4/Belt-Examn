const ProjectController = require('../controllers/project.controller');
module.exports = function(app) {
    app.get('/api', ProjectController.index);
    app.post('/api/projects', ProjectController.createProject);
    app.get('/api/allprojects', ProjectController.getAllProjects);
    app.get('/api/getProject/:id', ProjectController.getProjectById);
    app.put('/api/updateProject/:id', ProjectController.updateProject);
    app.delete('/api/deleteProject/:id', ProjectController.deleteProject);
}