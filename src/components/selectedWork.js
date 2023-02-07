import React from 'react';
import { Link } from 'react-router-dom';

import Coinmax from '../assets/img/backgrounds/coinmax.png';
import Coinshop from '../assets/img/backgrounds/coinshop.png';
import Drives from '../assets/img/backgrounds/drives.png';
import Coinshift from '../assets/img/backgrounds/coinshift.png';

import logoCoinmax from '../assets/img/logos/coinmax.png';
import logoCoinshop from '../assets/img/logos/coinshop.png';
import logoDrives from '../assets/img/logos/drives.png';
import logoCoinshift from '../assets/img/logos/coinshift.svg';


const WorkCard = (props) => {
    return (
      <div className='workCard' style={{backgroundImage: `url(${props.bg})`, color:{props.textColor}, backgroundSize:'cover'}}>
        <div className='logoWrapper'>
            <img className="logo" src={props.logo} />
        </div>
        <div className='contentWrapper'>
            <p className='sno'>● 00{props.sno}</p>
            <p className='title'>{props.title}</p>
            <p className='desc'>{props.desc}</p>
            <Link to="https://reactrouter.com/en/main/components/link">{props.linkText}</Link>
        </div>
      </div>
    )
  }

const SelectedWork = () => {
  return (
    <section id='selectedWork' >
        <p className='title'>Selected Work</p>
        <WorkCard bg={Coinmax} textColor="white" logo={logoCoinmax} sno="1" title="Coinmax (Web/Mobile)" desc="Landing Page, Web Based Crypto Exchange, Mobile Based Crypto Exchange (ios,Android), Web App (Instant Buy/Sell) Portal" linkText="View Case Study" />
        <WorkCard bg={Coinshop} logo={logoCoinshop} sno="1" title="Coinmax (Web/Mobile)" desc="Landing Page, Web Based Crypto Exchange, Mobile Based Crypto Exchange (ios,Android), Web App (Instant Buy/Sell) Portal" linkText="View Case Study" />
        <WorkCard bg={Drives} logo={logoDrives} sno="1" title="Coinmax (Web/Mobile)" desc="Landing Page, Web Based Crypto Exchange, Mobile Based Crypto Exchange (ios,Android), Web App (Instant Buy/Sell) Portal" linkText="View Case Study" />
        <WorkCard bg={Coinshift} logo={logoCoinshift} sno="1" title="Coinmax (Web/Mobile)" desc="Landing Page, Web Based Crypto Exchange, Mobile Based Crypto Exchange (ios,Android), Web App (Instant Buy/Sell) Portal" linkText="View Case Study" />
    </section>
  )
}

export default SelectedWork;