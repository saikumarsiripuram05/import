import {Component} from "react";
import './index.css'

class Welcome extends Component {
    state = {isSuscribed: false}

    buttonText = () => {
        this.setState => ({isSuscribed: !prevState.isSuscribed})
    }

    getButtonText = () => {
        const {isSuscribed} = this.state

        return isSuscribed ? 'Suscribed' : 'Subscribe'
    }

    render() {
        const buttonText = this.getButtonText()

        return (
            <div className="container">
                <h1 className="heading">Welcome</h1>
                <h1 className="message">Thank You! Happy Learning</h1>
                <button className="button" type="button" onClick={this.buttonText}>
                    {buttonText}
                </button>
            </div>
        )
    }
}

export default Welcome