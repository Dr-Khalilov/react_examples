import "./App.css";
import { Component } from "react";
import Aloha from "./components/Greeting";

class App extends Component {
    render() {
        const userData = {
            firstName: "John",
            url: "http://localhost:3000/favicon.ico",
        };
        const { firstName, url } = userData;
        return (
            <>
                <Aloha name={firstName} photo={url} isGreeting />
                <Aloha name="Legolas" photo={url} />
                <Aloha name="Max" photo={url} isGreeting />
            </>
        );
    }
}

export default App;
