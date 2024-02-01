
import React from 'react';

const Toolbox = ({ onAddText, onAddImage }) => {
  return (
    <div style={{ width: '33%', backgroundColor: '#87CEEB', padding: '20px', textAlign: 'center' }}>
      <h2>Toolbar</h2>
      <button style={{ backgroundColor: 'yellow', color: 'black', margin: '10px' }} onClick={onAddText}>
        Add Text
      </button>
      <button style={{ backgroundColor: 'yellow', color: 'black', margin: '10px' }} onClick={onAddImage}>
        Add Image
      </button>
    </div>
  );
};

export default Toolbox;
