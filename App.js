import React, { useState } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";

function App() {
  const [jsonInput, setJsonInput] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = async () => {
    try {
      const parsedInput = JSON.parse(jsonInput); // Validate JSON
      const response = await axios.post("http://localhost:3000/api/endpoint", parsedInput);
      setResponseData(response.data);
      setError(""); // Clear any errors
    } catch (err) {
      setError("Invalid JSON input or API error.");
    }
  };

  const filteredResponse = () => {
    if (!responseData) return {};
    const filterKeys = {
      Alphabets: "array_for_alphabets",
      Numbers: "array_for_numbers",
      "Highest Lowercase Alphabet": "highest_lowercase_alphabet",
    };

    const result = {};
    selectedOptions.forEach((option) => {
      if (filterKeys[option]) {
        result[option] = responseData[filterKeys[option]];
      }
    });
    return result;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Roll Number</h1>
      <textarea
        rows="5"
        cols="50"
        placeholder='Enter JSON (e.g., {"data":["A","C","z"]})'
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {responseData && (
        <>
          <Dropdown
            options={["Alphabets", "Numbers", "Highest Lowercase Alphabet"]}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <h2>Filtered Response:</h2>
          <pre>{JSON.stringify(filteredResponse(), null, 2)}</pre>
        </>
      )}
    </div>
  );
}

export default App;
