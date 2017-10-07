import React, {Component} from 'react';

import '../css/profile.css';

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
      <img src={this.props.picture} className="potrait-picture"/>
        <p className="page-content">
          {this.props.content}
        </p>
      </div>
    );
  }
}
