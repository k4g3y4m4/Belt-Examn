const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Project name is required"],
        minlength: [3, "Project name must be at least 3 characters long"]
    },
    statusProject: {
        type: String,
        default: "Backlog"
    },
    date: {
        type: Date,
        required: [true, "Date is required"],
    }}, {timestamps: true});

module.exports.Project = mongoose.model('Project', ProjectSchema);

