let todoList = [];

function addText(text) {
    const todo = {
        text,
        checked : false
    }

    todoList.push(todo);
}