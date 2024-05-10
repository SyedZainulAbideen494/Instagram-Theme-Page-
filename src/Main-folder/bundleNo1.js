import React, { useState } from "react";
import '../App.css'
import { Link } from "react-router-dom";
import shareIcon from '../Images/shareIcon.png'
import insta from '../Images/icons8-instagram-50.png'
import JSZip from 'jszip';
import ProductImg from '../Images/Black Pearl.png'

const FreeFiles1 = [
  'https://dropment.online/Free_Instagram_theme_page_bundle_no1.zip'
];

const FreeFiles2 = [
  'https://dropment.online/Free_Instagram_theme_page_bundle_no2.zip'
];

const FreeFiles3 = [
  'https://dropment.online/Free_Instagram_theme_page_bundle_no3.zip'
];

const downloadFile = (url) => {
  const fileName = url.split('/').pop();
  const aTag = document.createElement('a');
  aTag.href = url;
  aTag.setAttribute('download', fileName);
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
}
const BuyModal = ({ onClose }) => (
  
  <div className="modal-overlay">
    <div className="modal">
      <button className="close-btn" onClick={onClose}>x</button>
      <h3>Download all the bundles</h3>
      <div className="btn-container">
        <button className="download-btn" onClick={() => downloadFile(FreeFiles1[0])} >Dowload Bundle No 1</button>
        <button className="download-btn" onClick={() => downloadFile(FreeFiles2[0])} >Dowload Bundle No 2</button>
        <button className="download-btn" onClick={() => downloadFile(FreeFiles3[0])} >Dowload Bundle No 3</button>
      </div>
    </div>
  </div>
);

const Product1 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBuyClick = () => {
    setShowModal(true);
  };
  const handleShare = async () => {
    const siteURL = 'https://dropment.online/Black-Pearl'; // URL of dropment.online
  
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



  return (
    <div className="main-div-products-page">
      <div className="header_products_page">
        <Link to='/'>
          <button>&#9664;</button>
        </Link>
        <h2>Black Pearl</h2>
        <div className="icons">
          <img src={shareIcon} alt="Share icon" onClick={handleShare} />
          <a href="https://www.instagram.com/dropment.online">
          <img src={insta} alt="Instagram icon"/>
          </a>
        </div>
      </div>
      <div className="product-section">
      <div className="product-image">
        <img src={ProductImg} alt="Product" />
      </div>
      <div className="product-details">
        <h2>Black Pearl</h2>
        <p>
    <span className='discounted_price'>$12 </span>
    <span className='price'>(100% off Limited time offer!)</span>
  </p>
        <p className="discounted-price">$0.00</p>
        <button className="buy-btn" onClick={handleBuyClick}>Download</button>
      </div>
    </div>
    {showModal && <BuyModal onClose={() => setShowModal(false)} />}
    <div className="description-section">
        <h3>Product Description</h3>
        <p>
        Introducing the ultimate boost for your Instagram presence – the "Black Pearl" bundle! Elevate your social media game with a treasure trove of 50 premium clips designed to captivate and inspire your audience.

Dive into a collection of diverse content ranging from exclusive "Old Money" clips exuding sophistication and elegance, to exhilarating "Car" and "Yacht" clips that redefine luxury living. Take flight with stunning "Airplane" footage or set the scene for unforgettable moments with vibrant "Party" clips. Keep track of time in style with sleek "Watch" clips, while "Money" clips symbolize success and abundance. Explore the architectural wonders of the world with captivating "Houses/Building" clips – each one a visual masterpiece.

Unlock the potential of your Instagram page with the "Black Pearl" bundle – your passport to inspiration, sophistication, and unparalleled growth.
        </p>

        <h4>What's Included:</h4>
        <ul>
          <li>50+ clips</li>
          <li>Old money Clips</li>
          <li>Car Clips</li>
          <li>Yatch Clips</li>
          <li>Airplane Clips</li>
          <li>Party Clips</li>
          <li>Watch Clips</li>
          <li>Money Clips</li>
          <li>Houses/Building Clips</li>
        </ul>
      </div>
    </div>
  );
};

export default Product1;