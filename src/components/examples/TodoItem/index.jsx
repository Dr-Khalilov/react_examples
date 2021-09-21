import styles from './TodoItem.module.css';

const TodoItem = () => {
    return (
        <div className={styles.item}>
            <input type='checkbox' className={styles.input} />
            <p>task</p>
        </div>
    );
};

export default TodoItem;
