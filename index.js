const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Datos de ejemplo
const projects = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1', status: 'In Progress' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2', status: 'Completed' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3', status: 'Not Started' },
    { id: 4, title: 'Project 4', description: 'Description of Project 4', status: 'In Progress' },
    { id: 5, title: 'Project 5', description: 'Description of Project 5', status: 'Completed' }
];

// Ruta para obtener todos los proyectos
app.get('/projects', (req, res) => {
    res.json({ total: projects.length, data: projects });
});

// Ruta para obtener un proyecto por ID
app.get('/projects/:id', (req, res) => {
    const projectId = parseInt(req.params.id, 10);
    const project = projects.find(proj => proj.id === projectId);
    const {id, ...data} = project;  

    if (project) {
        res.json({ id: project.id, data});
    } else {
        res.status(404).json({ error: 'Project not found' });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});
