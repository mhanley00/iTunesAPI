import React from "react";

const SearchForm = props => (
  <form>
    <div className="form-group">
      <h4>Find an Artist:</h4>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder="Enter Artist Name"
        id="search"
      />
      <br />
      <button onClick={props.handleFormSubmit} className="btn">
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
