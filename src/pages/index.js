
import React from 'react';
import Toolbox from '../components/Toolbox';
import WebsiteBuilder from '../components/WebsiteBuilder';

const tools = [
  { id: '1', type: 'text', label: 'Text' },
  { id: '2', type: 'image', label: 'Image', src: 'https://via.placeholder.com/150' },
];

const Home = () => {
  const handleAddText = () => {
    // Implement logic to add text to the toolbox
  };

  const handleAddImage = () => {
    // Implement logic to add an image to the toolbox
  };

  return (
    <div style={{ display: 'flex' }}>
      <Toolbox onAddText={handleAddText} onAddImage={handleAddImage} />
      <WebsiteBuilder />
    </div>
  );
};

export default Home;
