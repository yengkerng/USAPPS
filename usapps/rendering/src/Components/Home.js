import React, {Component} from 'react';
import Template from './Template';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Template title="About USAPPS"> </Template>
        <p className="home-content">
          USAPPS is a non-profit organization that serves to inform Malaysian students about the US education by conducting annual workshops around Malaysia. The annual workshops feature notable guests such as Kevin Sim, resident counselor of Raffles Junior College, Singapore and university admission interviewers from various US Universities.
        </p>
        <p className="home-content">
          This organization is run primarily by students and is assisted by alumni from various institutions around the US. The fund collected goes to materials preparation, and transportation & accommodations for our volunteers and guest speakers from various states.
        </p>
        <p className="home-content">
          Several volunteers help to keep the organization running year round:
        </p>
        <ul>
          <li>President: Teng Chan Leong</li>
          <li>VP: Adelyn Yeoh Jia Hui</li>
          <li>Secretary: Ng Jung Kian</li>
          <li>Asst. Secretary: Ng Sin Seanne</li>
          <li>Treasurer: Jason Leong Chong Beng</li>
          <li>Committee Members: Yeoh Chen Chow, Melywn Pak Yong Ho</li>
          <li>Trustee: Tan Yeng Kerng, Pau May May</li>
          <li>Auditors: Sara-Ann Yong I-Min, Chiang Pang Fei</li>
        </ul>
      </div>
    );
  }
}
