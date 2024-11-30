import React, { useState } from "react";
import "../Assests/Addstudents.css";

const AddStudentForm = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="student-form-container">
      <h2>Add Students</h2>
      <form className="student-form">
        {/* Profile Photo Upload */}
        <div className="profile-photo-upload">
          <label htmlFor="profileImage">Upload Profile Photo *</label>
          <div className="passport-photo-preview">
            {profileImage ? (
              <img src={profileImage} alt="Profile" />
            ) : (
              <div className="placeholder">No Image</div>
            )}
          </div>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className="form-grid">
  <div className="form-field">
    <label>Student Unique ID *</label>
    <input type="text" placeholder="Unique ID " />
  </div>
  <div className="form-field">
    <label>Full Name *</label>
    <input type="text" placeholder="Full Name" />
  </div>
  <div className="form-field">
    <label>Phone No *</label>
    <input type="text" placeholder="Phone No" />
  </div>
  <div className="form-field">
    <label>Address *</label>
    <input type="text" placeholder="Address" />
  </div>
  <div className="form-field">
    <label>Password *</label>
    <input type="password" placeholder="Password" />
  </div>
  <div className="form-field">
    <label>Confirm Password *</label>
    <input type="password" placeholder="Confirm Password" />
  </div>
  <div className="form-field">
    <label>Select Route *</label>
    <input type="text" placeholder="Route" />
  </div>
  <div className="form-field">
    <label>Select stop *</label>
    <input type="text" placeholder="Stop" />
  </div>
</div>

        {/* Buttons */}
        <div className="form-buttons">
          <button type="button" className="cancel-button">
            Cancel
          </button>
          <button type="submit" className="add-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudentForm ;