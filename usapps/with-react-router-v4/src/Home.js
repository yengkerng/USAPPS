import React, { Component } from 'react';
import './home.css';
import logo from './usapps.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-header">
          <img src={logo} className="home-logo" alt="logo" />
          <h2>USAPPS stuff</h2>
        </div>
        <p className="home-intro">
        Some stuff here i dunno yet
        </p>
      </div>
    );
  }
}
