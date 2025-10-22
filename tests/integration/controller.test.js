const { TodoService } = require('../../js/model');
const { Controller } = require('../../js/controller');

// Mock the View because we are not testing the UI, only Controller-Model interaction.
const mockView = {
    update: jest.fn(),
    bindAddTodo: jest.fn(),
    bindToggleTodo: jest.fn(),
    bindRemoveTodo: jest.fn(),
};

describe('Controller-Service Integration Tests', () => {
    let service;
    let controller;

    beforeEach(() => {
        service = new TodoService();
        service.todos = []; // Reset singleton for tests
        controller = new Controller(service, mockView);
    });

    test('handleAddTodo should call service.addTodo and update the model', () => {
        // TODO: Call the controller's handleAddTodo method with some test text.
        controller.handleAddTodo("Some text");
        // Then, get the list of todos directly from the service.
        list =service.getTodos();
        // Assert that the service's todos array has a length of 1.
        expect(list.length).toBe(1);
        // Assert that the text of the first todo in the service matches the input.
        expect(service.todos[0].text).toMatch("Some text");
    });

    test('handleRemoveTodo should call service.removeTodo and update the model', () => {
        // TODO: First, directly add a todo to the service.
        service.addTodo("Some text");
        // Get the ID of the new todo.
        id = service.todos[0].id;
        // Call the controller's handleRemoveTodo method with that ID.
        controller.handleRemoveTodo(id);
        // Assert that the service's todos array is now empty.
        expect(service.todos.length).toBe(0);
    });
});
