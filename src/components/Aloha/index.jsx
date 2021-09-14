import { Component } from 'react';

class Aloha extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isGreeting: true,
        };
    }

    handleClick = () => {
        const { isGreeting } = this.state;
        this.setState({
            isGreeting: !isGreeting,
        });
    };

    render () {
        const { isGreeting } = this.state;
        const { name } = this.props;
        return (
            <>
                <h1 className='heading' onClick={this.handleClick}>
                    {isGreeting ? 'Hello' : 'Bye'} {name}
                </h1>
            </>
        );
    }
}

export default Aloha;
