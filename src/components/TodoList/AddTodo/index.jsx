import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AddTodo.module.scss';

const AddTodo = ({ onCreate }) => {
    const [value, setValue] = useState('');

    const submitHandler = event => {
        event.preventDefault();
        if (value.trim()) {
            onCreate(value);
            setValue('');
        }
    };

    return (
        <form className={styles.container} onSubmit={submitHandler}>
            <input
                type='text'
                value={value}
                onChange={({ target: { value } }) => setValue(value)}
            />
            <button type='submit'>Add todo</button>
        </form>
    );
};

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
};
export default AddTodo;
