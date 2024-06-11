import React, { useState } from 'react';

const PropertySearch = ({ setSearchCriteria }) => {
  const [price, setPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [garden, setGarden] = useState(false);
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchCriteria({ price, bedrooms, bathrooms, location, garden });
  };

  return (
    <form className= "propsearch" onSubmit={handleSubmit}>
      <div > 
        <label>Max Price: </label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label>Min Bedrooms: </label>
        <input type="number" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
      </div>
      <div>
        <label>Min Bathrooms: </label>
        <input type="number" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
      </div>
      <div>
        <label>Location: </label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div>
        <label>Garden: </label>
        <input type="checkbox" checked={garden} onChange={(e) => setGarden(e.target.checked)} />
      </div>
        <button type="submit" className="propbutton">Search</button>
    </form>
  );
};

export default PropertySearch;
