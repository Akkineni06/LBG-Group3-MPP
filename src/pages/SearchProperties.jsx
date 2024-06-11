import React, { useState, useEffect } from 'react';
import PropertySearch from './PropertySearch';
import PropertyList from './PropertyList';
import '../App.css'

const SearchProperties = () => {
  const [searchCriteria, setSearchCriteria] = useState({});
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/properties');
      const data = await response.json();
      setFilteredProperties(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchFilteredData = async () => {
      const response = await fetch('http://localhost:8000/properties');
      const data = await response.json();

      const filtered = data.filter(property => {
        const meetsPrice = searchCriteria.price ? property.price <= searchCriteria.price : true;
        const meetsBedrooms = searchCriteria.bedrooms ? property.bedrooms >= searchCriteria.bedrooms : true;
        const meetsBathrooms = searchCriteria.bathrooms ? property.bathrooms >= searchCriteria.bathrooms : true;
        const meetsGarden = searchCriteria.garden ? property.hasGarden === searchCriteria.garden : true;
        const meetsLocation = searchCriteria.location ? property.location == searchCriteria.location : true;
        return meetsPrice && meetsBedrooms && meetsBathrooms && meetsLocation && meetsGarden;
      });

      setFilteredProperties(filtered);
    };

    fetchFilteredData();
  }, [searchCriteria]);

  return (
    <div className="items-grid">
      <h1 className="head-prop-search">Property Search</h1>
      <PropertySearch setSearchCriteria={setSearchCriteria} />
      <PropertyList properties={filteredProperties} />
    </div>
  );
};

export default SearchProperties;

  
