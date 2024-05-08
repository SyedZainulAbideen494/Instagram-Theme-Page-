import logo from './logo.svg';
import './App.css';
import instagramIcon from './Images/icons8-instagram-50.png';
import product1Image from './Images/Black Pearl.png';
import product2Image from './Images/Obsidian Oasis.png';
import dropment from './Images/drop2_logo.png';
import shareIcon from './Images/shareIcon.png';
import { Fragment } from 'react';
import JSZip from 'jszip';

const FreeFiles1 = [
  'https://dropment.online/Free_Instagram_theme_page_bundle_no1.zip'
];
const FreeFiles2 = [
  'https://dropment.online/Free_Instagram_theme_page_bundle_no2.zip',
];
const FreeFiles3 = [
  'https://dropment.online/Free_Instagram_theme_page_bundle_no3.zip'
];

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
                <img src={instagramIcon} alt='Instagram' onClick={downloadAllFiles1}/>
              </a>
              <img src={shareIcon} alt='Share' onClick={handleShare}/>
            </div>
          </header>
        </div>
      </div>
    </Fragment>
  );
}

export default App;