import React, { Component } from 'react';
import '../css/history.css';

import firstImage from '../pictures/history/1.jpg';
import secondImage from '../pictures/history/2.jpg';
import thirdImage from '../pictures/history/3.jpg';
import fourthImage from '../pictures/history/4.jpg';
import fifthImage from '../pictures/history/5.jpg';
import sixthImage from '../pictures/history/6.jpg';
import seventhImage from '../pictures/history/7.jpg';
import eightthImage from '../pictures/history/8.jpg';
import ninethImage from '../pictures/history/9.jpg';
import tenthImage from '../pictures/history/10.jpg';
import eleventhImage from '../pictures/history/11.jpg';

import Template from './Template';

export default class History extends Component {
  render() {
    return (
      <div>
      <Template title="History"> </Template>
      <img src={firstImage} className="group-picture"/>
      <p className="content">
In February 2006, Victor Chai and Wayne Loong, both of whom are from Embry-Riddle Aeronautical University, approached Hui Lin (Carnegie Mellon University) who then involved Chen Chow (Cornell) for one purpose: to organize a large-scale U.S. education fair in Malaysia. Following the model of the established Experiences in Singapore, the young organizers successfully put together Experiences 2006, Kuala Lumpur on 16th July 2006.
      </p>

      <img src={secondImage} className="group-picture"/>
      <p className="content">
Instead of having the fair populated by the usual college representatives, the organizers had the booths of the top 45 universities of the United States manned by alumni, current students and incoming students of each school. The reason for this: to offer honest and objective answers and advice to students and parents. These student-facilitators and alumnus-facilitators would later become recurring elements of the standard model of future U.S. Apps Workshops. By the end of the day, 4,000 students, parents and passers-by had visited the fair at Sunway Pyramid Convention Center.
      </p>

      <img src={thirdImage} className="group-picture"/>
      <p className="content">
      Hui Lin and Chen Chow were joined by Wun Min (MIT), Christi Toa (University of Nebraska-Lincoln) and Syamsul Hasran (University of Southern California) in 2007. With booths, student-representatives and alumni from 66 top U.S. universities, the group successfully led Discover U.S. Education – KL ’07, the largest United States education fair in Malaysia yet. Held at MidValley Exhibition Center on 22nd July 2007, the event attracted a crowd of 10,000 visitors. A similar success story was recorded in June 2008, when USA for Students invited motivated students and alumni from 45 top U.S. universities and managed to attract 4,000 students and parents to Wisma MCA specifically for an education fair.
      </p>
      <p className="content">
      Throughout these years, the core committee had received a strong support from the U.S. Embassy. Teh Lay-Hwa from U.S. Commercial Services was actively involved, and she provided us with good pointers and support in 2006 and 2007, whereas the Consul-General of the U.S. Embassy, Andrew Miller and his team played a crucial role in 2008. The American Universities Alumni Malaysia (AUAM) also guided us and provided accounts through which we could channeled our sponsorships and expenses. Of course, we won’t forget about the corporate sponsors — and we would like to express our heartfelt gratitude towards all parties that generously believed in us.
      </p>
      <p className="content">
      After the education fair in 2008, we reflected on our past events and realized that we never addressed and helped ease the biggest problem faced by Malaysians who wished to study in the U.S.: the tediousness and complexity of the comprehensive US college applications. We realized that the traditional modes of interaction in education fairs after which Experiences, Discover U.S. Education and USA for Students were modeled were not helpful in demystifying college applications. At the same time, the global financial crisis plagued Malaysia and it was tough to raise the sponsorship money needed to finance a large-scale education fair.
      </p>
      <p className="content">
      So Chen Chow, Wun Min and Carmen Loh (Princeton) decided to pull off an ad-hoc advising session in KL Sentral food court on 5th July 2008. Although details of the advising session was only posted online, the response was favorable and encouraging: 50 netizens of Recom.org turned up. This was the humblest of beginnings. Eager to further create awareness of education in the U.S. among Malaysians, Chen Chow and Wun Min, together with 32 facilitators organized the first of the annual series of USAPPS: the 3-day USAPPS 2009 workshop. With Taylor’s University College as our venue sponsor, we were able to workshop with over 250 students with more personal attention. The topics included application essays, CVs, interviews, financial aid and SATs, among others. Participants also had the opportunity to mingle with and obtain advice from incoming students, current students, alumni and experienced interviewers for top U.S. universities.
      </p>

      <img src={fourthImage} className="group-picture"/>
      <img src={fifthImage} className="group-picture"/>
      <img src={sixthImage} className="group-picture"/>

      <p className="content">
      The 2009 USAPPS workshop set the ground running for the following years. Since then, USAPPS has hosted annual workshops.

      USAPPS 2010 saw the creation of 4 half-day introductory workshops all over Malaysia (Kuching, Kota Kinabalu, Penang, and the Klang Valley) in addition the 2-day intensive workshop held in the Klang Valley. The half-day workshops were held in the chosen cities all over Malaysia as a pilot program; the feedback from 2010 justified the team’s decision to concentrate resources on the Penang and Klang Valley workshops in future years. For both Klang Valley workshops in 2010, audience turnout was a massive 98% and 112% of capacity respectively, in a lecture theater with 300 seats. This inspired the team to reevaluate the possibility of expanding the 2-day intensive workshop into an affair that not only brought together driven and motivated students, but the people in their lives who would impact and influence their decision-making as well.

      In 2011, USAPPS established two stand-alone workshops – one specifically for parents and the other for teachers and counselors.
      </p>

      <img src={seventhImage} className="group-picture"/>
      <img src={eightthImage} className="group-picture"/>
      <p className="content">
In 2012, USAPPS decided to tweak the structure of the workshop due to the overwhelming response that called for more engagement between participants and facilitators. Alumni and current students from top universities and liberal arts colleges were invited to set up booths specific to each university in order to hand prospective students the opportunity to learn more about universities of their interest.
      </p>

      <img src={ninethImage} className="group-picture"/>
      <img src={tenthImage} className="group-picture"/>
      <p className="content">
Since then, USAPPS has been gaining more recognition among secondary school and pre-university students. The most recent workshops at Taylor’s University have had overwhelming turn-outs, and have brought together prospective students and current students who are studying all across the United States.
      </p>
      <img src={eleventhImage} className="group-picture"/>
      <p className="content">
We’re excited to be playing our part in helping Malaysians achieve their goals of studying in the United States. The 2017 workshop will be coming your way shortly!      </p>

      </div>
    );
  }
}
