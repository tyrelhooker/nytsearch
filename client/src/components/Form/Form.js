import React from "react";

const Form = props => (
  <form onSubmit={props.handleFormSubmit}>
    <div className="form-group">
      <label for="search">Search Term:</label>
      <input 
        type="text" 
        className="form-control" 
        name="searchTerm"
        value={props.searchTerm}
        onChange={props.handleInputChange}
      />
    </div>
    <div className="form-group">
      <label for="start-year">Start Year:</label>
      <input 
        type="text" 
        className="form-control" 
        name="startYear"
        value={props.startYear}
        onChange={props.handleInputChange}
      />
    </div>
    <div className="form-group">
      <label for="end-year">End Year:</label>
      <input 
        type="text" 
        className="form-control" 
        name="endYear"
        value={props.endYear}
        onChange={props.handleInputChange}
      />
    </div>
    <button 
      type="submit" 
      className="btn btn-primary"
    >
      Submit
    </button>
  </form>
);

export default Form;