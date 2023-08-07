function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    const newTodoText = todoInput.value.trim(); // Trim whitespace

    if (newTodoText === '') {
        return; // Don't add empty todos
    }

    const newTodo = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function () {
        newTodo.classList.toggle('completed');
    };
    newTodo.appendChild(checkbox);

    const todoText = document.createTextNode(newTodoText);
    newTodo.appendChild(todoText);

    newTodo.classList.add('todo-item');
    todoList.appendChild(newTodo);

    todoInput.value = '';
}