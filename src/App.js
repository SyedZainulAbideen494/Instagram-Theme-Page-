import React, { Fragment, useRef, useEffect, useState } from 'react';
import './App.css';
import dropment from './Images/drop2_logo.png';
import instagramIcon from './Images/icons8-instagram-50.png';
import shareIcon from './Images/shareIcon.png';
import product1Image from './Images/Black Pearl.png';
import product2Image from './Images/Obsidian Oasis.png';
import heroImage from './Images/banner1.png'

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


function App() {
  const contactusRef = useRef(null);
  const [q1, setq1] = useState(false)
  const [q2, setq2] = useState(false)
  const [q3, setq3] = useState(false)
  const [q4, setq4] = useState(false)
  const [q5, setq5] = useState(false)

  const toggleQ5 = () => {
    setq5(!q5); // Toggles the state of q1
  };

  const toggleQ4 = () => {
    setq4(!q4); // Toggles the state of q1
  };

  const toggleQ1 = () => {
    setq1(!q1); // Toggles the state of q1
  };
  const toggleQ2 = () => {
    setq2(!q2); // Toggles the state of q1
  };
  const toggleQ3 = () => {
    setq3(!q3); // Toggles the state of q1
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
        <button className="cta-button">Get Started!</button>
      </div>
    </section>
    <div className="dark-section_products">
  <div className="bundles-heading">
    <h2>Our Bundles</h2>
  </div>
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
  <div className="bundle">
    <img src={product2Image} alt="Bundle 2" />
    <h2>Obsidian Oasis Bundle</h2>
    <p>
    <span className='discounted_price'>$50 </span>
    <span className='price'>(40.02% off Limited time offer!)</span>
  </p>
    <p>$29.99</p>
    <button>Buy Now</button>
  </div>
</div>
  </div>
  );
}

export default App;