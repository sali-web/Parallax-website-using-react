import React, { useState } from 'react';
import './styles.css';
import customer from "./images/customer.png";
import customer1 from "./images/customer1.png";
import Quote from "./images/quote.png";

const reviews = [
  {
    text: "I had a great experience with this service. It exceeded my expectations!",
    customerImage: customer,
    author: "John Doe",
    position: "Graphic Designer",
  },
  {
    text: "Amazing product! I would highly recommend it to anyone.",
    customerImage: customer1,
    author: "Jane Smith",
    position: "Developer",
  },
  {
    text: "An excellent product with great features.",
    customerImage: customer,
    author: "Bob Johnson",
    position: "UI/UX Designer",
  },
];

const CustomerReviewPage = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handlePrevReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="customer-review-page">
      <p className='clients'>Clients Feedback</p>
      <p className='what'>What our <span> clients say</span></p>
      <div className="customer-review-container">
        <div className="review-left">
            <img src={Quote} alt="Quotation Symbol" className='quotation-mark' />
          {currentReview.text}
          <p className="review-author">{currentReview.author}</p>
          <p className="review-position">{currentReview.position}</p>
        </div>
        <div className="review-right">
          <img src={currentReview.customerImage} alt="Customer" className='customer-photo'/>
        </div>
        <div className="navigation-buttons">
        <div className="nav-container">
            <button className="nav-button" onClick={handlePrevReview}>
            &lt;&lt;
            </button>
            <button className="nav-button" onClick={handleNextReview}>
            &gt;&gt;
            </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewPage;
