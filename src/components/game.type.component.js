import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import VeryEasyComponent from './very.easy.component';
import EasyComponent from './easy.component';
import AverageComponent from './average.component';
import HardComponent from './hard.component';
import './game.type.component.css';

class GameTypeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            banner: "banner",
            typeText: "item-1",
            typeItem: "item",
            home: "home-div",
            veryEasyComponent: "hidden"
        }
        this.handleBar = this.handleBar.bind(this);
        this.handleHome = this.handleHome.bind(this);
        this.handleVeryEasyComponent = this.handleVeryEasyComponent.bind(this);
    }

    handleBar = () => {
        this.setState({
            banner: "banner-2",
            typeText: "item-1-banner",
            typeItem: "item-banner"
        })
    }
    handleBar2 = () => {
        this.setState({
            banner: "banner",
            typeText: "item-1",
            typeItem: "item"
        })
    }
    handleHome = () => {
        this.setState({

            home: "home-div-2",

        })
    }
    handleVeryEasyComponent = () => {
        this.setState({

            veryEasyComponent: "visible"

        })
    }

    render() {

        return (
            <Router>
                <div className=" home container-fluid">

                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2"></div>
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 col-8">
                            <nav id={this.state.banner}>
                                <Link to={'/'} id={this.state.typeText}>Select Game Type</Link>

                                <ul className=" list mr-auto">
                                    <li onClick={this.handleHome} className="">
                                        <span onClick={this.handleVeryEasyComponent}> <Link onClick={this.handleBar2}
                                                                                            to={'/very-easy'}
                                                                                            id={this.state.typeItem}>Very Easy </Link></span>
                                    </li>
                                    <li onClick={this.handleHome} className="">
                                        <Link onClick={this.handleBar2} to={'/Easy'}
                                              id={this.state.typeItem}>Easy</Link>
                                    </li>
                                    <li onClick={this.handleHome} className="">
                                        <Link onClick={this.handleBar2} to={'/average'}
                                              id={this.state.typeItem}>Average</Link>
                                    </li>
                                    <li onClick={this.handleHome} className="">
                                        <Link onClick={this.handleBar2} to={'/hard'}
                                              id={this.state.typeItem}>Hard</Link>
                                    </li>
                                </ul>

                            </nav>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2"></div>

                        <Switch>
                            <Route exact path='/very-easy' component={VeryEasyComponent}/>
                            <Route exact path='/easy' component={EasyComponent}/>
                            <Route exact path='/average' component={AverageComponent}/>
                            <Route exact path='/hard' component={HardComponent}/>

                        </Switch>
                    </div>
                    <div className=" row">
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2"></div>
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 col-8">
                            <div id={this.state.home}>
                                <p className="name-heading">Master Guess <i class="fas fa-question"></i></p>
                                <p className="name-description">a word guessing game</p>
                                <span onClick={this.handleHome}><button onClick={this.handleBar}
                                                                        className="play-button">Play!</button></span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2"></div>
                    </div>
                </div>

            </Router>
        );
    }
}

export default GameTypeComponent;