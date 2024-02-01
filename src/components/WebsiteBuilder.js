
import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';

const WebsiteBuilder = () => {
  const [sections, setSections] = useState([]);
  const [editingSection, setEditingSection] = useState(null);

  const [, drop] = useDrop({
    accept: 'TOOL',
    drop: (item) => handleDrop(item),
  });

  const handleDrop = (item) => {
    const { type, label, src } = item.tool;
    const newSection = { type, label, src, id: Date.now().toString() };
    setSections([...sections, newSection]);
  };

  const handleEdit = (id) => {
    setEditingSection(id);
  };

  const handleSave = () => {
    localStorage.setItem('websiteSections', JSON.stringify(sections));
    setEditingSection(null);
  };

  const handleDelete = (id) => {
    const updatedSections = sections.filter((section) => section.id !== id);
    setSections(updatedSections);
  };

  const handleDownload = () => {
    const content = JSON.stringify(sections, null, 2);
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'my_website.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const savedSections = JSON.parse(localStorage.getItem('websiteSections')) || [];
    setSections(savedSections);
  }, []);

  return (
    <div style={{ width: '67%', backgroundColor: '#FFC0CB', padding: '20px', textAlign: 'center' }}>
      <div ref={drop} style={{ border: '1px dashed #ccc', minHeight: '300px' }}>
        {sections.map((section) => (
          <div key={section.id} style={{ padding: '10px', margin: '10px', border: '1px solid #ddd' }}>
            {section.type === 'text' && (
              <p onClick={() => handleEdit(section.id)}>{editingSection === section.id ? 'Editing' : section.label}</p>
            )}
            {section.type === 'image' && <img src={section.src} alt={section.label} />}
            <button onClick={() => handleDelete(section.id)}>Delete</button>
          </div>
        ))}
      </div>
      <button style={{ backgroundColor: 'green', color: 'white', position: 'absolute', top: '10px', right: '10px' }} onClick={handleSave}>
        Save
      </button>
      <button style={{ backgroundColor: 'yellow', color: 'black', margin: '10px' }} onClick={handleDownload}>
        Download
      </button>
    </div>
  );
};

export default WebsiteBuilder;
