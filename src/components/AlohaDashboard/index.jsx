import { Component } from 'react';
import Aloha from './Aloha';

class AlohaDashboard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 1,
                    firstName: 'Vlad',
                    lastName: 'Doe',
                },
                {
                    id: 2,
                    firstName: 'Neo',
                    lastName: 'Doe',
                },
                {
                    id: 3,
                    firstName: 'Tom',
                    lastName: 'Doe',
                },
                {
                    id: 4,
                    firstName: 'Lego',
                    lastName: 'Doe',
                },
                {
                    id: 5,
                    firstName: 'John',
                    lastName: 'Doe',
                },
                {
                    id: 6,
                    firstName: 'Masha',
                    lastName: 'Doe',
                },
            ],
            isDirectOrder: true,
            isExiting: true,
        };
    }

    sortUsers = () => {
        const { users, isDirectOrder } = this.state;
        this.setState({
            isDirectOrder: !isDirectOrder,
            users: users.slice(0).sort((a, b) => {
                if (isDirectOrder) {
                    return b.id - a.id;
                }
                return a.id - b.id;
            }),
        });
    };

    mapAloha = user => (
        <li key={user.id}>
            <Aloha
                id={user.id}
                isExiting={this.state.isExiting}
                name={`${user.firstName} ${user.lastName}`}
                deleteUser={this.deleteUser}
            />
        </li>
    );

    deleteUser = id => {
        const { users } = this.state;
        this.setState({
            users: users.slice(0).filter(item => item.id !== id),
        });
    };

    render() {
        const { users, isDirectOrder } = this.state;

        return (
            <>
                <p>
                    Порядок сортировки по id:&nbsp;
                    {isDirectOrder ? 'Прямой' : 'Реверс'}
                </p>
                <ul>{users.map(this.mapAloha)}</ul>
                <button onClick={this.sortUsers}>SORT</button>
            </>
        );
    }
}

export default AlohaDashboard;
