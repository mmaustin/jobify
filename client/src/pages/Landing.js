import React from 'react';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className='container page'>
            <div className='info'>
                <h1>
                    job <span>track</span> app
                </h1>
                <p>
                    Some dummy text goes here. More stuff for the dummies, because dummies rule!
                </p>
                <Link to='/register' className="btn btn-hero">Login/Register</Link>
            </div>
            <img src={main} alt="job hunt" className='img main-img'/>
        </div>
    </Wrapper>
  )
}

export default Landing;
