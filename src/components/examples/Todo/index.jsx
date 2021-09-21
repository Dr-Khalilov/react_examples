import React from 'react';
import TodoItem from '../TodoItem';
import styles from './Todo.module.css';

const Todo = () => {
    return (
        <div className={styles.container}>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    );
};

export default Todo;
