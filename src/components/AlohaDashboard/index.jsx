import { Component } from 'react';
import Aloha from '../Aloha';

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
        };
    }

    mapAloha = user => (
        <li key={user.id}>
            <Aloha name={`${user.firstName} ${user.lastName}`} />
        </li>
    );

    render () {
        const { users } = this.state;

        return <ul>{users.map(this.mapAloha)}</ul>;
    }
}

export default AlohaDashboard;
