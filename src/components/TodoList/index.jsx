import { Component } from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.scss';

export default class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, completed: false, title: 'Buy a bread' },
                { id: 2, completed: false, title: 'Buy a meat' },
                { id: 3, completed: false, title: 'Buy a milk' },
                { id: 4, completed: false, title: 'Buy an oil' },
                { id: 5, completed: false, title: 'Buy a water' },
                { id: 6, completed: false, title: 'Buy a wine' },
                { id: 7, completed: false, title: 'Buy a knife' },
                { id: 8, completed: false, title: 'Cook dinner' },
                { id: 9, completed: false, title: 'Do tasks' },
                { id: 10, completed: false, title: 'Get a smarter' },
            ],
        };
    }

    onToggle = id => {
        const { todos } = this.state;
        this.setState({
            todos: todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
        });
    };

    removeTodo = id => {
        const { todos } = this.state;
        this.setState({
            todos: todos.slice(0).filter(todo => todo.id !== id),
        });
    };

    mapTodos = todo => (
        <TodoItem
            key={todo.id}
            todo={todo}
            id={todo.id}
            handleChange={this.onToggle}
            removeTodo={this.removeTodo}
        />
    );

    render () {
        const { todos } = this.state;
        return (
            <>
                {todos.length ? (
                    <ul className={styles.todoList}>
                        {todos.map(this.mapTodos)}
                    </ul>
                ) : (
                    <p>No todos!</p>
                )}
            </>
        );
    }
}
