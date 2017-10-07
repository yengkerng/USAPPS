import React, {Component} from 'react';
import '../css/home.css';
import logo from '../pictures/usapps.jpg';

export default class Template extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-header">
          <img src={logo} className="home-logo" alt="logo"/>
          <h2>{this.props.title}</h2>
        </div>
      </div>
    );
  }
}
