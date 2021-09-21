import UserCard from './UserCard';

const UserList = ({ users, setUsers }) => {
    const selectUser = id => {
        setUsers(
            users.slice(0).map(user => ({
                ...user,
                isSelected: id === user.id ? !user.isSelected : user.isSelected,
            })),
        );
    };

    const mapUsers = user => (
        <UserCard
            key={user.id}
            user={user}
            selectUser={selectUser}
        />
    );

    return (
        <section>
            <h1>User List From DB</h1>
            {users.map(mapUsers)}
        </section>
    );
};

export default UserList;
