import React, { useState } from 'react';
import './App.css';

const provinces = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Nova Scotia',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
];

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="App">
      <div className="form-container">
        <DataForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          provinces={provinces}
        />
      </div>

      {/* Display entered information */}
      {submittedData && (
        <div className="entered-info-container">
          <h3>Entered Information:</h3>
          <p>Email: {submittedData.email}</p>
          <p>Full Name: {submittedData.fullName}</p>
          <p>Address: {submittedData.address}</p>
          <p>City: {submittedData.city}</p>
          <p>Province: {submittedData.province}</p>
          <p>Postal Code: {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

const DataForm = ({ formData, onChange, onSubmit, provinces }) => (
  <form onSubmit={onSubmit} className="data-entry-form">
    <label>
      Email:
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={onChange}
      />
    </label>

    <label>
      Full Name:
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={onChange}
      />
    </label>

    <label>
      Address:
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={onChange}
      />
    </label>

    <label>
      City:
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={onChange}
      />
    </label>

    <label>
      Province:
      <select
        name="province"
        value={formData.province}
        onChange={onChange}
      >
        <option value="">Select Province</option>
        {provinces.map((province) => (
          <option key={province} value={province}>
            {province}
          </option>
        ))}
      </select>
    </label>

    <label>
      Postal Code:
      <input
        type="text"
        name="postalCode"
        value={formData.postalCode}
        onChange={onChange}
      />
    </label>

    <button type="submit">Submit</button>
  </form>
);

export default App;
