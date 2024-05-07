import logo from './logo.svg';
import './App.css';
import instagramIcon from './Images/icons8-instagram-50.png';
import product1Image from './Images/Dropment.png';
import product2Image from './Images/Dropment.png';
import dropment from './Images/drop2_logo.png'
import shareIcon from './Images/shareIcon.png'
import { Fragment } from 'react';

const FreeFiles = [
  'http://localhost:3000/Free_Instagram_theme_page_bundle_no1.zip',
  'http://localhost:3000/Free_Instagram_theme_page_bundle_no2.zip',
  'http://localhost:3000/Free_Instagram_theme_page_bundle_no3.zip'
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

  const downloadFile = (url) => {
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

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
      </div>
    </Fragment>
  );
}

export default App;
