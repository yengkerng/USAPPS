import React, {Component} from 'react';
import elina from '../pictures/2017/Elina.png';
import rachel from '../pictures/2017/Rachel.png';
import paggie from '../pictures/2017/Paggie.png';
import lina from '../pictures/2017/Lina.png';

import Template from './Template';
import Profile from './profile';

import '../css/workshop.css';

export default class Workshop2017 extends Component {
  render() {
    return (
      <div>
      <Template title="Core Commitee"> </Template>

        <p className="page-content">
          Meet this year’s organizers- the people who will be working together to bring you this year’s workshops! We have a gym junkie, a Rubik’s cube solver, a fried chicken lover, a sleep deprived -but extremely productive- student and four extremely excited girls!
        </p>
        <Profile picture={elina}
        content= "Hola, I’m Elina! I’m a freshman at University of California, Los Angeles and a CIMB ASEAN scholar. My intended major is Economics/Cognitive Science but I have many other interests that include visual arts, history, psychology, cardio workouts, lifting and education. I was also admitted into Parsons School of Design in The New School, so if you have any questions in regards to submitting art portfolios, I’m able to provide some guidance. I am currently trying to consolidate my thinking and hone my logical precision. I spend most of my free time reading (about anything and everything) and working out at the gym.">
        </Profile>
        <Profile picture={lina}
        content= "Hello, this is Lina! I’m a first-year at Brown University planning to major in Computer Science and Economics, but thanks to Brown’s Open Curriculum I’ve been able to explore classes outside my major as well. I also spent my last two years of high school in the beautiful country of Armenia doing the IB at the United World College of Dilijan. My favourite pastimes include: missing Penang food (shoutout to Penangites!), solving the Rubik’s cube and binge watching videos on YouTube. I have been involved with USAPPS for the past two years, first as a participant and then as a facilitator in 2016. Studying in the US has allowed me to meet many great people and learn about the world in ways I’ve never imagined. I can’t wait to share more with you!">
        </Profile>
        <Profile picture={paggie}
        content= "Hi, I’m Paggie! I’m a freshman at New York University who is currently deciding between a double major in Economics and Media, Culture & Communications or Marketing. (sounds so fancy, right?) When I’m not figuring out the purpose of my life on earth or asking my sister for photos of our dog back home, you can most probably find me catching up on work in Bobst Library or doing other fun stuff in NYC, like eating fried chicken. Or actually just in my room, thinking of how great it would be to eat fried chicken. And Insomnia cookies. And Chilli Pan Mee. And Village Park Nasi Lemak. Ok, I’ll stop now. As a two-time participant and previously a facilitator myself, I’m very grateful for the exposure I’ve gained & connections I’ve made from being a part of USAPPS. You have no idea how stoked I am to bring you an USAPPS experience that was as equally fulfilling -if not, better- as mine!">
        </Profile>
        <Profile picture={rachel}
        content= "Hey, everyone! I’m Rachel, a Freshman at the University of Pennsylvania majoring in Actuarial Science and possibly Finance. A month ago, I wanted to minor in Computer Science too, but after my first com sci class, I don’t know whether I would like to subject myself to the similar kind of suffering for another few years. I procrastinate way too much and end up getting only 2-3 hours of sleep per night, so if you want to contact me, I’ll definitely reply ASAP! (yes, despite the time difference since I would probably be awake anyway) I’ve climbed the hierarchy in USAPPS; I was a participant 2 years ago, a volunteer a year ago, and am now on the core committee. I’m really excited to bring this year’s workshops to you!">
        </Profile>
      </div>
    );
  }
}
