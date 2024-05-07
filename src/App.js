import React, { Fragment } from 'react';
import './App.css';
import dropment from './Images/drop2_logo.png';
import instagramIcon from './Images/icons8-instagram-50.png';
import shareIcon from './Images/shareIcon.png';
import product1Image from './Images/Black Pearl.png';
import product2Image from './Images/Obsidian Oasis.png';

function App() {
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
    <Fragment>
      <div className='main_div'>
        <div className="header">
          <header>
            <img src={dropment} alt='logo Dropment'/>
            <div className="social-links">
              <a href='https://www.instagram.com/dropment.online'>
                <img src={instagramIcon} alt='Instagram'/>
              </a>
              <img src={shareIcon} alt='Share' onClick={handleShare}/>
            </div>
          </header>
        </div>
        <div className="products">
          <div className="product">
            <img src={product1Image} alt="Black Pearl"/>
            <h3>Black Pearl</h3>
            <p>Free!</p> {/* Replace XX.XX with actual price */}
            <button>View</button>
          </div>
          <div className="product">
            <img src={product2Image} alt="Obsidian Oasis"/>
            <h3>Obsidian Oasis</h3>
            <p>$25</p> {/* Replace XX.XX with actual price */}
            <button>View</button>
          </div>
        </div>
        <div className="footer">
          <footer>
            <p>&copy; 2024 Dropment. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </Fragment>
  );
}

export default App;