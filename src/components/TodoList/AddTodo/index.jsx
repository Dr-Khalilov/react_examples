import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AddTodo.module.scss';

const useInputValue = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue);
    return {
        bind: {
            value,
            onChange: ({ target: { value } }) => setValue(value),
        },
        clear: () => setValue(defaultValue),
        value: () => value,
    };
};

const AddTodo = ({ onCreate }) => {
    const input = useInputValue('');

    const submitHandler = event => {
        event.preventDefault();
        const { clear, value } = input;
        if (value().trim()) {
            onCreate(value());
            clear();
        }
    };

    return (
        <form className={styles.container} onSubmit={submitHandler}>
            <input {...input.bind} />
            <button type='submit'>Add todo</button>
        </form>
    );
};

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
};
export default AddTodo;
