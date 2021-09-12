import { Component } from "react";

class Aloha extends Component {
    render() {
        const { name, photo, isGreeting } = this.props;
        return (
            <h1 className="heading">{isGreeting ? "Hello" : "Bye"} {name}
                <img src={photo} alt={name} /></h1>
        );
    }
}

export default Aloha;