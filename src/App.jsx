import React from 'react';
import './App.css';
import { FiMenu, FiSearch } from "react-icons/fi";
import { MdImageSearch } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ImageBazzar = () => {

  const images =[
    { src: "Image/doctor.jpg", alt: "Healthcare",label:"Healthcare"},
    { src: "Image/travel.jpg", alt: "Travel" ,},
    { src: "Image/makeup.jpg", alt: "Beauty", },
    { src: "Image/business.jpg", alt: "Business" },
    { src: "Image/family.jpg", alt: "Family" },
    { src: "Image/beach.jpg", alt: "Beach" },
    { src: "Image/vacation.jpg", alt: "Vacation" },
    { src: "Image/tracking.jpg", alt: "Tracking" },
    { src: "Image/culture.jpg", alt: "Culture" },
    { src: "Image/wedding.jpg", alt: "Wedding" },
    { src: "Image/shopping.jpg", alt: "Shopping" },
    { src: "Image/festival.jpg", alt: "Festivals" },
    { src: "Image/nature.jpg", alt: "Nature" },
    { src: "Image/learning.jpg", alt: "Learning" },
    { src: "Image/food.jpg", alt: "Food" },
    { src: "Image/couple.jpg", alt: "Couples" },
    { src: "Image/banking.jpg", alt: "Banking" },
    { src: "Image/friends.jpg", alt: "Friends" },

];

  

  const categories = [
    "Family", "Business", "Jewellery", "Couples", "Wedding", "Farmer", "Kitchen",
    "Doctor", "Celebration", "Office", "Travel", "Shopping", "Education", "Students",
    "Insurance", "Mobile", "Computer", "Food", "Festivals"
  ];

  return (
    <div>
      
      <nav className="navbar">
        <div className="navbar-left">
          <FiMenu size={20} />
          <span>Browse Categories</span>
        </div>

        <div className="navbar-center">
          <span className="logo">ImagesBazaar</span>
        </div>

        <div className="navbar-right">
          <a href="#">Pricing</a>
          <button className="signin-btn">Sign In</button>
        </div>
      </nav>

      
      <div className="search-bar">
        <div className="search-input">
          <FiSearch size={22} className="search-icon" />
          <input
            type="text"
            placeholder="Search the largest collection of Indian images"
          />
        </div>
        <div className="search-options">
          <span className="dropdown">Images ▼</span>
          <div className="divider" />
          <div className="image-search">
            <MdImageSearch size={24} />
            <span>Search by image</span>
          </div>
        </div>
      </div>
    <div className='main-container'>
        <div className='header'>
            <h1>What's New</h1>
            <button>Explore Now</button>
        </div>
    </div>
    <div className='middle-section'>
            <h2>Popular Collections </h2>
        </div>
        
        <div className="image-grid">
      {images.map((image, idx) => (
        <div className="image-item" key={idx}>
          <img src={image.src} alt={image.alt} />
          {image.label && <span className="label">{image.label}</span>}
        </div>
      ))}
    </div>

    <div className="imagesbazaar-container">
      <div className="why-section">
        <h3>WHY IMAGESBAZAAR?</h3>
        <p>
          India's diversity and complexity can be witnessed through its people, traditions and values
          associated with distinctive regional customs,. habits, lifestyle and festivals. That's why our
          content reflects the innate expressions of deep-rooted feelings of individuals through which
          spring their day-to-day actions. From contemporary concepts and ideas to the broadest range of
          categories depicting Indians in virtually all walks of life, age groups and expressions – you will
          find it all here! <a href="#">Know More</a>
        </p>
      </div>

      <h2 className="popular-heading">Popular Searches</h2>

      <div className="button-grid">
        {categories.map((item, index) => (
          <button key={index} className="category-button">{item}</button>
        ))}
      </div>
    </div>

    <footer className="footer">
      <div className="footer-section contact">
        <p><FaEnvelope /> divyabhootda36@gmail.com</p>
        <p><FaPhoneAlt /> <strong>All India Toll Free:</strong> 1800–11–6869</p>
        <p><FaWhatsapp /> <strong>Whatsapp Us:</strong> +917878307330</p>
        <div className="social-icons">
          <span><FaFacebookF /></span>
          <span><FaLinkedinIn /></span>
          <span><FaTwitter /></span>
        </div>
      </div>

      <div className="footer-section links">
        <h4>Company Info</h4>
        <p>Home</p>
        <p>About Us</p>
        <p>Testimonials</p>
        <p>Image Research</p>
      </div>

      <div className="footer-section links">
        <h4>Learn More</h4>
        <p>Pricing</p>
        <p>Licensing</p>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
      </div>

      <div className="footer-section links">
        <h4>Need Help?</h4>
        <p>Contact Us</p>
        <p>Search Tips</p>
        <p>FAQ</p>
        <p>Technical</p>
      </div>

      <div className="footer-bottom">
        <p>© https://www.imagesbazaar.com. A division of Mash Audio Visuals Pvt. Ltd. All rights reserved.</p>
        <div className="bottom-links">
          <span>Terms of Use</span> | <span>Privacy Policy</span> | <span>FAQs</span>
        </div>
        <div className="payment-icons">
          <img src="data:image/jpeg;base64,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" alt="Visa" />
          <img src="data:image/png;base64,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" alt="MasterCard" />
          <img src="data:image/png;base64,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" alt="AmEx" />
          <img src="data:image/png;base64,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" alt="RuPay" />
          <img src="data:image/jpeg;base64,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" alt="Secure" />
        </div>
      </div>
    </footer>
    </div>
  )
}

export default ImageBazzar;
