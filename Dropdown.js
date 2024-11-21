import React from "react";
import Select from "react-select";

function Dropdown({ options, selectedOptions, setSelectedOptions }) {
  const handleChange = (selected) => {
    setSelectedOptions(selected ? selected.map((opt) => opt.value) : []);
  };

  const dropdownOptions = options.map((option) => ({ value: option, label: option }));

  return (
    <div style={styles.container}>
      <label style={styles.label}>Choose Options:</label>
      <Select
        isMulti
        options={dropdownOptions}
        onChange={handleChange}
        placeholder="Select options"
        styles={customStyles}
      />
    </div>
  );
}

// Inline styles for the component
const styles = {
  container: {
    margin: "20px 0",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  label: {
    display: "block",
    marginBottom: "10px",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

// Custom styles for the Select component
const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "2px solid #007BFF",
    borderRadius: "8px",
    padding: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#007BFF" : state.isFocused ? "#E6F7FF" : "#FFF",
    color: state.isSelected ? "#FFF" : "#333",
    padding: "10px",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#E6F7FF",
    color: "#007BFF",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#007BFF",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#007BFF",
    ":hover": {
      backgroundColor: "#007BFF",
      color: "#FFF",
    },
  }),
};

export default Dropdown;
