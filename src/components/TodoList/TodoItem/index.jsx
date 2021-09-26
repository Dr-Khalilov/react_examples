import PropTypes from 'prop-types';
import styles from './TodoItem.module.scss';

const TodoItem = ({
    todo: { title, completed },
    id,
    handleChange,
    removeTodo,
}) => {
    const classes = [];
    if (completed) {
        classes.push(styles.done);
    }

    return (
        <li className={styles.container}>
            <span className={classes.join(' ')}>
                <input
                    className={styles.input}
                    type='checkbox'
                    checked={completed}
                    onChange={handleChange.bind(null, id)}
                />
                <strong>{id}</strong>&nbsp; {title}
            </span>
            <button onClick={removeTodo.bind(null, id)} className={styles.rm}>
                &times;
            </button>
        </li>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
