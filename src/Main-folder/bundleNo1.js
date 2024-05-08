import React, { useCallback } from "react";
import '../App.css'
import product1Image from '../Images/Black Pearl.png';
import { Link } from "react-router-dom";
import shareIcon from '../Images/shareIcon.png'
import insta from '../Images/icons8-instagram-50.png'
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

const Product1 = () => {

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

  const downloadAllFiles1 = async () => {
    const zip = new JSZip();
    const promises = [];

    // Fetch each file and add it to the zip
    FreeFiles1.forEach((url, index) => {
      const fileName = `file_${index + 1}.zip`; // You can customize the file names here
      const promise = fetch(url)
        .then(response => response.blob())
        .then(blob => zip.file(fileName, blob));
      promises.push(promise);
    });

    // Wait for all fetch promises to resolve
    await Promise.all(promises);

    // Generate the zip file and provide a download link
    zip.generateAsync({ type: 'blob' }).then(blob => {
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = 'Black Pearl Bundle Pack 1'; // Name of the zip file
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  };

  const downloadAllFiles2 = async () => {
    const zip = new JSZip();
    const promises = [];

    // Fetch each file and add it to the zip
    FreeFiles2.forEach((url, index) => {
      const fileName = `file_${index + 1}.zip`; // You can customize the file names here
      const promise = fetch(url)
        .then(response => response.blob())
        .then(blob => zip.file(fileName, blob));
      promises.push(promise);
    });

    // Wait for all fetch promises to resolve
    await Promise.all(promises);

    // Generate the zip file and provide a download link
    zip.generateAsync({ type: 'blob' }).then(blob => {
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = 'Black Pearl Bundle Pack 2'; // Name of the zip file
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  };

  const downloadAllFiles3 = async () => {
    const zip = new JSZip();
    const promises = [];

    // Fetch each file and add it to the zip
    FreeFiles3.forEach((url, index) => {
      const fileName = `file_${index + 1}.zip`; // You can customize the file names here
      const promise = fetch(url)
        .then(response => response.blob())
        .then(blob => zip.file(fileName, blob));
      promises.push(promise);
    });

    // Wait for all fetch promises to resolve
    await Promise.all(promises);

    // Generate the zip file and provide a download link
    zip.generateAsync({ type: 'blob' }).then(blob => {
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = 'Black Pearl Bundle Pack 3'; // Name of the zip file
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  };

  return (
    <div className="main_div_products_page">
      <div class="header_products_page">
        <Link to='/'>
          <button>&#9664;</button>
        </Link>
        <h2>Black Pearl</h2>
        <div class="icons">
          <i class="fa fa-share-alt"><img src={shareIcon} onClick={handleShare} alt="Share icon"/></i>
          <i class="fa fa-instagram"><img src={insta} alt="Instagram icon" onClick={downloadAllFiles2}/></i>
        </div>
      </div>
    </div>
  );
};

export default Product1;