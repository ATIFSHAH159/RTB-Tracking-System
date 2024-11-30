import React from "react";
import "../Assests/Addbuses.css";
import { FaBus } from "react-icons/fa";

const AddBusForm = () => {
  return (
    <div className="form-container">
      <div className="form-header">
        <div className="form-icon"><FaBus fontSize="30px" /></div>
        <h2>Add Buses</h2>
      </div>
      <form>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="busName">Bus Name *</label>
            <input type="text" id="busName" placeholder="Bus Name" />
          </div>
          <div className="form-field">
            <label htmlFor="busNo">Bus No *</label>
            <input type="text" id="busNo" placeholder="Bus No" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="registrationPlate">Registration Plate *</label>
            <input type="text" id="registrationPlate" placeholder="Registration Plate" />
          </div>
          <div className="form-field">
            <label htmlFor="model">Model *</label>
            <input type="text" id="model" placeholder="Model" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="busColor">Bus Color *</label>
            <input type="text" id="busColor" placeholder="Bus Color" />
          </div>
          <div className="form-field">
            <label htmlFor="numberOfSeats">Number of Seats *</label>
            <input type="number" id="numberOfSeats" placeholder="Number of Seats" />
          </div>
        </div>
        <div className="form-buttons">
          <button type="button" className="cancel-button">Cancel</button>
          <button type="submit" className="add-button">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddBusForm;
