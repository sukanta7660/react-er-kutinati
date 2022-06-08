import React, {Component} from 'react';
import './form.css';
class FormHandler extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            skill: ''
        }
    }
    changeFirstNameHandler = event => {
        this.setState({
            firstName: event.target.value
        })
    };
    changeLastNameHandler = event => {
        this.setState({
            lastName: event.target.value
        })
    };
    changeSkillHandler = event => {
        this.setState({
            skill: event.target.value
        })
    };
    handleSubmit = event => {
        alert(`${this.state.firstName} ${this.state.lastName}, ${this.state.skill}`)
        event.preventDefault();
    };
    render() {
        return (
            <form className={'form-container'} onSubmit={this.handleSubmit}>
                <h3>Basic Form</h3>
                <label>First Name: </label>
                <input
                    className={'input-type-text'}
                    type="text"
                    value={this.state.firstName}
                    onChange={this.changeFirstNameHandler}
                />
                <br/>
                <label>Last Name: </label>
                <input
                    className={'input-type-text'}
                    type="text"
                    value={this.state.lastName}
                    onChange={this.changeLastNameHandler}
                />
                <br/>
                <label>Select a skill </label>
                <select
                    className={'select-option'}
                    value={this.state.skill}
                    onChange={this.changeSkillHandler}

                >
                    <option value="React">React</option>
                    <option value="Vue">Vue</option>
                    <option value="Angular">Angular</option>
                </select>
                <br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}
export default FormHandler;
