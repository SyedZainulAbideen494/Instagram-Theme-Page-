import React, { Fragment, useRef, useEffect, useState } from 'react';
import '../App.css';
import dropment from '../Images/drop2_logo.png';
import instagramIcon from '../Images/icons8-instagram-50.png';
import shareIcon from '../Images/shareIcon.png';
import product1Image from '../Images/Black Pearl.png';
import product2Image from '../Images/Obsidian Oasis.png';
import heroImage from '../Images/banner1.png'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';


const AnimatedSection = ({ children }) => {
  const sectionRef = useRef();

  useEffect(() => {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('visible');
        } else {
          sectionRef.current.classList.remove('visible');
        }
      });
    }, { threshold: 0.5 });

    sectionObserver.observe(sectionRef.current);

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className="section-fade-in">
      {children}
    </div>
  );
};


function Home() {
  const form = useRef();
  const bundlesRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pek4tcv', 'template_bfaicga', form.current, {
        publicKey: 'oiGY-u7t8BC8uN_Zf',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Thanks For the feedback')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  const handleScrollToBundles = () => {
    bundlesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleShare = async () => {
    const siteURL = 'https://dropment.online'; // URL of dropment.online
  
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out Dropment!',
          text: `Discover cool motivational clips and download them for free to grow your Instagram page at Dropment.`,
          url: siteURL
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      const shareText = `Check out Dropment: Discover cool motivational clips and download them for free to grow your Instagram page at ${siteURL}`;
      const shareURL = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
      window.location.href = shareURL;
    }
  };

  const handleWhatsAppChat = () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=7760372901';
  };

  return (
    <div className='main_div'>
    <header className="header">
      <img src={dropment} alt='Dropment Logo'/>
      <div className="social-links">
        <a href='https://www.instagram.com/dropment.online'>
          <img src={instagramIcon} alt='Instagram'/>
        </a>
        <img src={shareIcon} alt='Share' onClick={handleShare}/>
      </div>
    </header>
    <section className='hero_section' style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero_content">
        <h2>Level Up Your Insta-Game</h2>
        <button className="cta-button" onClick={handleScrollToBundles}>Get Started!</button>
      </div>
    </section>
    <div className="dark-section_products">
  <div className="bundles-heading" ref={bundlesRef}>
    <h2>Our Bundles</h2>
  </div>
  <Link to='/Black-Pearl' style={{textDecoration: 'none', color: 'white'}}>
  <div className="bundle">
  <img src={product1Image} alt="Bundle 1" />
  <h2>Black Pearl Bundle</h2>
  <p>
    <span className='discounted_price'>$12 </span>
    <span className='price'>(100% off Limited time offer!)</span>
  </p>
  <p>Free!</p>
  <button>Buy Now</button>
</div>
</Link>
<Link to='/Obsidian-Oasis' style={{textDecoration: 'none', color: 'white'}}>
  <div className="bundle">
    <img src={product2Image} alt="Bundle 2" />
    <h2>Obsidian Oasis Bundle</h2>
    <p>
    <span className='discounted_price'>$57 </span>
    <span className='price'>(82.46% off Limited time offer!)</span>
  </p>
    <p>$10</p>
    <button>Buy Now</button>
  </div>
  </Link>
</div>
<div className='feedbackSection'>
        <section>
          <div className='heading_feedbackSection'>
            <h2>Feedback</h2>
          </div>
          <form ref={form} onSubmit={sendEmail}>
      <input name="message" placeholder='Send Feedback' />
      <input type="submit" value="Send" />
    </form>
        </section>
      </div>
      <div className='footer'>
  <footer>
    <div class="footer-columns">
      <div class="footer-column">
        <h3>Social Media</h3>
        <ul>
        <a href='https://www.instagram.com/dropment.online' style={{textDecoration: 'none', color: 'white'}}>
          <li>Instagram</li>
          </a>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Constact Us</h3>
        <ul>
          <li>dropment.saz@gmail.com</li>
          <li>+91 7760372901</li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Links</h3>
        <ul>
          <li onClick={handleScrollToBundles}>Our bundles</li>
        </ul>
      </div>
    </div>
  </footer>
</div>
  </div>
  );
}

export default Home;