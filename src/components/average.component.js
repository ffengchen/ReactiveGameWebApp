import React, {Component} from 'react';


class AverageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ["unconcern", "different", "excellent", "communion", "beautiful", "blessings", "attribute", "authentic"],
            guess: "",
            arrayoption: "options",
            status: "",
            matching: "",
            answer: "excellent",
            answer2: "exactness",
            number: "",
            tries: "4"
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTries = this.handleTries.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleRetry = this.handleRetry.bind(this);


    }

    handleRetry = () => {
        this.setState({
            tries: "4",
            status: "",
            guess: "",
            matching: "",
            number: ""
        })
    }
    handleNext = () => {
        this.setState({
            tries: "4",
            status: "",
            guess: "",
            matching: "",
            number: "",
            options: ["defendent", "ignorance", "recognize", "exactness", "essentil", "affluence", "attentive", "antipathy"],
        })
    }
    handlePrevious = () => {
        this.setState({
            tries: "4",
            status: "",
            guess: "",
            matching: "",
            number: "",
            options: ["unconcern", "different", "excellent", "communion", "beautiful", "blessings", "attribute", "authentic"],
        })
    }
    handleTries = () => {


        this.setState({
            tries: this.state.tries - 1
        })


    }

    handleInput(e) {

        this.setState({
            guess: e.target.value
        })
    }

    handleSubmit = e => {

        e.preventDefault();

        this.setState({
            matching: this.state.guess
        })
        if (this.state.answer === this.state.guess) {
            this.setState({
                number: "9/9",
                status: "You Win"

            })


        }
        if (this.state.guess === "unconcern") {
            this.setState({
                number: "3/9",
                status: "retry"
            })
        }
        if (this.state.guess === "different") {
            this.setState({
                number: "3/9",
                status: "retry"
            })
        }
        if (this.state.guess === "communion") {
            this.setState({
                number: "1/9",
                status: "retry"
            })
        }
        if (this.state.guess === "beautiful") {
            this.setState({
                number: "3/9",
                status: "retry"
            })
        }
        if (this.state.guess === "blessings") {
            this.setState({
                number: "3/9",
                status: "retry"
            })
        }
        if (this.state.guess === "attribute") {
            this.setState({
                number: "2/9",
                status: "retry"
            })
        }
        if (this.state.guess === "authentic") {
            this.setState({
                number: "4/9",
                status: "retry"
            })
        }

        if (this.state.answer2 === this.state.guess) {
            this.setState({
                number: "4",
                status: "You Win"

            })


        }
        if (this.state.guess === "defendent") {
            this.setState({
                number: "3/9",
                status: "retry"
            })
        }
        if (this.state.guess === "ignorance") {
            this.setState({
                number: "3/9",
                status: "retry"
            })
        }
        if (this.state.guess === "recognize") {
            this.setState({
                number: "3/9",
                status: "retry"
            })
        }
        if (this.state.guess === "essentil") {
            this.setState({
                number: "4/9",
                status: "retry"
            })
        }
        if (this.state.guess === "affluence") {
            this.setState({
                number: "4/9",
                status: "retry"
            })
        }
        if (this.state.guess === "attentive") {
            this.setState({
                number: "3/9",
                status: "retry"
            })
        }
        if (this.state.guess === "antipathy") {
            this.setState({
                number: "3/9",
                status: "retry"
            })
        }


    }

    render() {

        return (


            <div className="  container-fluid">
                <a className="home-icon" href="http://localhost:3000/">Home</a>
                <div classname="row">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2"></div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 col-8">
                        <div class=" very-easy card">
                            <form onSubmit={this.handleSubmit}>
                                <h4>Average Level!</h4>


                                <label style={{fontWeight: 'bold'}}>input guess</label>
                                <input value={this.state.guess}
                                       onChange={this.handleInput}
                                       placeholder="type here..." className=" input form-control" type="text"/>
                                <input onClick={this.handleTries} className="submit-button" type="Submit"/>
                            </form>
                            <ul>

                                {this.state.options.map(item => (
                                    <li className="list" key={item}>{item}</li>
                                ))}
                            </ul>
                            <table class="">
                                <thead style={{borderTop: '1px solid aqua'}}>
                                <tr>
                                    <th scope="col">Guess</th>
                                    <th scope="col">Matching letters</th>


                                </tr>
                                </thead>
                                <tbody style={{border: '1px solid aqua'}}>
                                <tr style={{border: '1px solid aqua'}}>
                                    <td style={{border: '1px solid aqua'}}>

                                        {this.state.matching}
                                    </td>

                                    <td>

                                        {this.state.number}
                                    </td>


                                </tr>
                                <tr>
                                    <td>
                                        <button onClick={this.handleRetry} className="btm">Retry</button>
                                        <button onClick={this.handleNext} className="btm">Next</button>
                                        <button onClick={this.handlePrevious} className="btm">Previous</button>
                                        <span className="status">{this.state.status}</span>
                                        <span> Tries Left={this.state.tries}</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2"></div>
                </div>

            </div>


        );
    }
}

export default AverageComponent;