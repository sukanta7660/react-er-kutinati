import {Component} from 'react'
import ButtonComp from "../Utils/ButtonComp";

class ClassClick extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: 'sukanta purkayastha',
            message: 'Welcome to reactive world.'
        }

    }

    clickHandler = () => {
        alert(`Hi ${this.state.name}, ${this.state.message}`);
    }

    render() {
        return (
            <div>
                <ButtonComp handler={this.clickHandler} btnTxt="Click btn"/>
            </div>
        )
    }
}

export default ClassClick
