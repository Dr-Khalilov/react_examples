import React from 'react';

const UserCard = ({
                      user: { firstName, lastName, id, isSelected },
                      selectUser,
                  }) => {
    const styles = {
        border: isSelected ? '4px solid blue' : null,
    };

    const btnHandler = () => selectUser(id);

    return (
        <article style={styles}>
            <h1>
                Full name: &nbsp;
                {`${firstName} ${lastName}`}
            </h1>
            <p>ID: {id}</p>
            <button onClick={btnHandler}>Select</button>
        </article>
    );
};

export default UserCard;
