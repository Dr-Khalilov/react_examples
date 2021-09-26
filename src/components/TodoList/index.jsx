import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.scss';

const TodoList = ({ todos }) => {
    const mapTodos = todo => (
        <TodoItem key={todo.id} todo={todo} id={todo.id} />
    );

    return <ul className={styles.todoList}>{todos.map(mapTodos)}</ul>;
};
export default TodoList;
