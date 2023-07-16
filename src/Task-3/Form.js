import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';

import './Form.css'; 

const App = () => {
  const [sections, setSections] = useState([]);
  const [sectionHeader, setSectionHeader] = useState('');
  const [sectionDetails, setSectionDetails] = useState('');

  const addSection = () => {
    const newSection = {
      header: sectionHeader,
      details: sectionDetails,
    };

    setSections([...sections, newSection]);
    setSectionHeader('');
    setSectionDetails('');
  };

  return (
    <div className="container">
      <div className="form">
        <input
          type="text"
          className="input-field"
          placeholder="Section Header"
          value={sectionHeader}
          onChange={(e) => setSectionHeader(e.target.value)}
        />
        <textarea
          className="textarea-field"
          placeholder="Section Details"
          value={sectionDetails}
          onChange={(e) => setSectionDetails(e.target.value)}
        ></textarea>
        <Button label="Add" className="add-button" onClick={addSection} />
      </div>

      {sections.length > 0 && (
        <Accordion multiple style={{width:"400px",border:"1px solid black"}}>
          {sections.map((section, index) => (
            <AccordionTab key={index} header={`Section ${index + 1}: ${section.header}`} style={{borderBottom:'1px solid black'}}>
              <div className="section-details">
                <p>{section.details}</p>
              </div>
            </AccordionTab>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default App;
