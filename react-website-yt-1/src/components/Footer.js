import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';



function Footer() {
  const formBtn = (event) => {
    event.preventDefault();

  }
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          If you wish to get in touch with me,
        </p>
        <p className='footer-subscription-text'>
        send me a message!!
        </p>
        <div className='input-areas'>
          <form onSubmit={formBtn}>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button src='/contact' buttonStyle='btn--outline'>Submit</Button>
          </form>
        </div>
      </section>
     
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              42
              <i class='fas fa-cat'/>
            </Link>
          </div>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href="https://www.facebook.com/jose.pepe.14606/" 
              target='_blank'
              aria-label='Facebook'
              rel="noreferrer"
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href="https://www.instagram.com/rogue_waffles/" 
              target='_blank'
              aria-label='Instagram'
              rel="noreferrer"
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link twitter'
              href="https://twitter.com/wernerC42" 
              target='_blank'
              aria-label='Twitter'
              rel="noreferrer"
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              href="https://www.linkedin.com/in/werner-castanaza-73a156149"            
              target='_blank'
              aria-label='LinkedIn'
              rel="noreferrer"
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
