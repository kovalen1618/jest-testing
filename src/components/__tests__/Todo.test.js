import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../Todo";

afterEach(() => {
    cleanup();
})

test('should render non-completed todo component', () => {
    const todo = { id: 1, title: 'Wash Dishes', completed: false }
    render(<Todo todo={todo}/>);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Wash Dishes');
    expect(todoElement).not.toContainHTML('<strike>');
});

test('should render completed todo component', () => {
    const todo = { id: 2, title: 'Make Dinner', completed: true }
    render(<Todo todo={todo}/>);
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Make Dinner');
    expect(todoElement).toContainHTML('<strike>');
})