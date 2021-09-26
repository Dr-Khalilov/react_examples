import React from 'react';

const TodoItem = ({ todo: { title }, id }) => (
    <li>
        <strong>{id}</strong> {title}
    </li>
);

export default TodoItem;
