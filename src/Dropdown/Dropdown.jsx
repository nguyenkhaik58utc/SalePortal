import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(''); // State to hold the selected option
  const options = ['Option 1', 'Option 2', 'Option 3']; // Dropdown options

  const handleSelect = (event) => {
    setSelectedOption(event.target.value); // Update the selected option
  };

  return (
    <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedOption} onChange={handleSelect}>
        <option value="" disabled>Select an option</option> {/* Placeholder option */}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption && <p>You selected: {selectedOption}</p>} {/* Display selected option */}
    </div>
  );
};

export default Dropdown;