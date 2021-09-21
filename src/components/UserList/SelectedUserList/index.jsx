import React from 'react';

const SelectedUserList = ({ users }) => {
    const filteredUsers = users.filter(user => user.isSelected);
    return (
        <div>
            {filteredUsers.map(user => (
                <span>{`${user.firstName} ${user.lastName}`} &nbsp;</span>
            ))}
        </div>
    );
};

export default SelectedUserList;
