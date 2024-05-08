import React, { useState } from "react";
import '../App.css'
import { Link } from "react-router-dom";
import shareIcon from '../Images/shareIcon.png'
import insta from '../Images/icons8-instagram-50.png'
import JSZip from 'jszip';
import ProductImg from '../Images/Obsidian Oasis.png'


const Product2 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBuyClick = () => {
    setShowModal(true);
  };
  const handleShare = async () => {
    const siteURL = 'https://dropment.online/Obsidian-Oasis'; // URL of dropment.online
  
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
    const defaultMsg = encodeURIComponent("Buy Obsidian Oasis Bundle (Don't edit this message, You will recive a response within 15mins)");
    window.location.href = `https://api.whatsapp.com/send?phone=7760372901&text=${defaultMsg}`;
  };

  return (
    <div className="main-div-products-page">
      <div className="header_products_page">
        <Link to='/'>
          <button>&#9664;</button>
        </Link>
        <h2>Obsidian Oasis</h2>
        <div className="icons">
          <img src={shareIcon} alt="Share icon" onClick={handleShare} />
          <img src={insta} alt="Instagram icon"/>
        </div>
      </div>
      <div className="product-section">
      <div className="product-image">
        <img src={ProductImg} alt="Product" />
      </div>
      <div className="product-details">
        <h2>Obsidian Oasis</h2>
        <p>
    <span className='discounted_price'>$57 </span>
    <span className='price'>(82.46% off Limited time offer!)</span>
  </p>
        <p className="discounted-price">$10</p>
        <button className="buy-btn" onClick={handleWhatsAppChat}>Buy Now</button>
      </div>
    </div>
    <div className="description-section">
        <h3>Product Description</h3>
        <p>
        Welcome to the epitome of luxury and sophistication – the "Obsidian Oasis" bundle! Immerse yourself in a world of opulence with over 200 premium clips meticulously curated to elevate your Instagram presence to new heights.

Indulge in an expansive collection of exclusive content, including "Old Money" clips exuding timeless elegance, breathtaking "Car" and "Yacht" footage that embodies luxury living, and mesmerizing "Airplane" views that inspire wanderlust. Set the stage for unforgettable moments with vibrant "Party" scenes and showcase your success with sleek "Watch" and "Money" clips. Embark on a visual journey through architectural marvels with captivating "Houses/Building" footage – each frame a work of art.

But that's not all! Accompanying this lavish assortment is a comprehensive e-book filled with expert tips, strategies, and insights to propel your Instagram growth to unprecedented levels. Learn the secrets to crafting a compelling narrative and fostering genuine engagement with your audience, leveraging the power of these premium clips to create an Instagram presence that commands attention and admiration.

Experience the pinnacle of Instagram excellence with the "Obsidian Oasis" bundle – where luxury meets influence, and every post is a masterpiece.
        </p>

        <h4>What's Included:</h4>
        <ul>
          <li>200+ clips</li>
          <li>Old money Clips</li>
          <li>Car Clips</li>
          <li>Yatch Clips</li>
          <li>Airplane Clips</li>
          <li>Party Clips</li>
          <li>Watch Clips</li>
          <li>Money Clips</li>
          <li>Houses/Building Clips</li>
          <li>E-Book Guide</li>
        </ul>
      </div>
    </div>
  );
};

export default Product2;