import React from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';

const FoodItem = ({ id, name, description, image }) => {
  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img className='food-item-image' src={image} alt={name} />
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p className="food-item-name">{name}</p>
        
        </div>
        <p className="food-item-desc">{description}</p>
      </div>
    </div>
  );
};

export default FoodItem;
