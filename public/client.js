const socket = io();

$(document).ready(function () {
    const taskList = $('#taskList');
    const taskInput = $('#taskInput');
    const addTaskButton = $('#addTask');

    // Function to add a new task
    addTaskButton.click(() => {
        const taskText = taskInput.val();
        if (taskText && taskList.children().length < 10) {
            socket.emit('addTask', taskText);
            taskInput.val('');
        }
    });

    // Function to remove a task
    taskList.on('click', 'li', function () {
        const taskId = $(this).data('id');
        socket.emit('deleteTask', taskId);
    });

    // Socket.io event listeners
    socket.on('updateTaskList', (tasks) => {
        taskList.empty();
        tasks.forEach((task, index) => {
            const listItem = $('<li>').text(task.text).data('id', index);
            taskList.append(listItem);
        });
    });
});
