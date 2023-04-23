import React from "react";
import { Link } from "react-router-dom";

const Publishers = ({ tags }) => {
  return (
    <div className="col-sm-1 col-lg-10">
      <div className="related-content card text-decoration-none">
        <div className="related-body card-body p-10 d-flex align-items-center">
          <h5 className="title text-start py-2">Name</h5>
          <div className="ms-auto">
            <button type="button" className="btn btn-primary">
              Approve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publishers;
