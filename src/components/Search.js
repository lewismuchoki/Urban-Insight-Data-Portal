import React from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ search, handleChange }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/search?searchQuery=${search}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div style={{ paddingTop: '30px' }}>
      <div className="Data-heading text-start text-center py-2 mb-4">Search</div>
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="col-12 py-3" style={{marginRight: '550px'}}>
          <input
            type="text"
            value={search}
            className="form-control search-input"
            placeholder="Search datasets..."
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-warning search-btn" style={{color:'white'}}>
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  );
};

export default Search;
