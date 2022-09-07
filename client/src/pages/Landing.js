import React from 'react';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <img src={logo} alt='jobify' className='logo'/>
        </nav>
        <div className='container page'>
            <div className='info'>
                <h1>
                    job <span>track</span> app
                </h1>
                <p>
                    Some dummy text goes here. More stuff for the dummies, because dummies rule!
                </p>
                <button className="btn btn-hero">Login/Register</button>
            </div>
            <img src={main} alt="job hunt" className='img main-img'/>
        </div>
    </Wrapper>
  )
}

export default Landing;
