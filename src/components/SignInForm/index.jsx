import React, { Component } from 'react';
import cx from 'classnames';
import styles from './SignInForm.module.css';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isemailValid: true,
            ispasswordValid: true,
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: '',
        });
    };

    handleChange = ({ target: { value, name } }) => {
        if (value.includes(' ')) {
            this.setState({
                [`is${name}Valid`]: false,
            });
        } else {
            this.setState({
                [`is${name}Valid`]: true,
            });
        }
        this.setState({ [name]: value });
    };

    render() {
        const { email, password, isemailValid, ispasswordValid } = this.state;

        const emailClassNames = cx(styles.input, styles.validData, {
            [styles.invalidData]: !isemailValid,
        });

        const passwClassNames = cx(styles.input, styles.validData, {
            [styles.invalidData]: !ispasswordValid,
        });

        return (
            <form className={styles.container} onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    value={email}
                    className={emailClassNames}
                    type='email'
                    name='email'
                    placeholder='Email'
                />
                <input
                    onChange={this.handleChange}
                    value={password}
                    className={passwClassNames}
                    type='password'
                    name='password'
                    placeholder='Password'
                />
                <input className={styles.input} type='submit' />
            </form>
        );
    }
}

export default SignInForm;
