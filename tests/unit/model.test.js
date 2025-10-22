const { TodoService } = require('../../js/model');

describe('TodoService Unit Tests', () => {
    let service;

    beforeEach(() => {
        // Create a new service instance for each test to ensure isolation
        service = new TodoService();
        // This is a bit of a hack to reset the singleton for testing purposes
        service.todos = [];
    });
    function sum(a,b){
        return a+b;
    }
    test('should add a new todo', () => {
        // TODO: Call the addTodo method with some text.
        // Then, assert that the service's todos array has a length of 1.
        // Assert that the text of the first todo matches the input text.
        //arrange
        text = "Some text";
        //act
        service.addTodo("Some text");
        //assert
        expect(service.todos.length).toBe(1);
        expect(service.todos[0].text).toMatch(text);
    });

    test('should toggle the completed state of a todo', () => {
        // TODO: First, add a todo.
        service.addTodo("Some text");
        // Then, get its ID and call the toggleTodoComplete method.
        service.toggleTodoComplete(service.todos[0].id);
        // Assert that the 'completed' property of that todo is now true.
        expect(service.todos[0].completed).toBeTruthy();
        // Call toggleTodoComplete again and assert that it's false.
        service.toggleTodoComplete(service.todos[0].id);
        expect(service.todos[0].completed).toBeFalsy();
    });

    test('should remove a todo', () => {
        // TODO: Add a todo.
        service.addTodo("Some text");
        // Get its ID and call the removeTodo method.
        service.removeTodo(service.todos[0].id);
        // Assert that the service's todos array is now empty (length of 0).
        expect(service.todos.length).toBe(0);
    });

    test('should not add a todo if text is empty', () => {
        // TODO: Call addTodo with an empty string.
        service.addTodo();
        // Assert that the todos array still has a length of 0.
        expect(service.todos.length).toBe(0);
    });
});
