import { Component } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import styles from './TodoList.module.scss';

export default class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            todos: [],
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

    addTodo = title => {
        const { todos } = this.state;
        this.setState({
            todos: todos
                .slice(0)
                .concat([{ id: generateId(), completed: false, title }]),
        });
    };

    render () {
        const { todos } = this.state;
        return (
            <>
                <AddTodo onCreate={this.addTodo} />
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

const genId = count => ({
    id: () => ++count,
});
let generateId = genId(0).id;
