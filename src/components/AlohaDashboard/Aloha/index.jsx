import { Component } from 'react';

class Aloha extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isGreeting: true,
        };
    }

    switchGreeting = () => {
        const { isGreeting } = this.state;
        this.setState({
            isGreeting: !isGreeting,
        });
    };

    deleteLine = () => {
        const { deleteUser, id } = this.props;
        deleteUser(id);
    };

    render() {
        const { isGreeting } = this.state;
        const { name, isExiting } = this.props;
        return (
            <>
                <h1 className='heading' onClick={this.switchGreeting}>
                    {isGreeting ? 'Hello' : 'Bye'} {name}
                    {isExiting ? '!' : '.'}
                </h1>
                <button onClick={this.deleteLine}>Delete user</button>
            </>
        );
    }
}

export default Aloha;
