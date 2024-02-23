const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const tasks = [];

app.use(express.static('public'));

io.on('connection', (socket) => {
    // Send the initial task list to the new client
    socket.emit('updateTaskList', tasks);

    socket.on('addTask', (taskText) => {
        if (tasks.length < 10) {
            tasks.push({ text: taskText });
            io.emit('updateTaskList', tasks);
        }
    });

    socket.on('deleteTask', (taskId) => {
        if (taskId >= 0 && taskId < tasks.length) {
            tasks.splice(taskId, 1);
            io.emit('updateTaskList', tasks);
        }
    });
});

const port = process.env.PORT || 27016;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
