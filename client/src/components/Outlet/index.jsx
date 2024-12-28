import React from "react";
import { Link } from "react-router-dom";
const OutletLinks = () => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div>
          <img />
          <Link className="mr-20" to="reviews">
            Reviews
          </Link>
        </div>
        <div>
          <img />

          <Link className="mr-20" to="details">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OutletLinks;
