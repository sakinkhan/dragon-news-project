import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-lg border-1 border-gray-200">
      <figure className="px-5 pt-5">
        <img src={news.image_url} alt="news image" className="rounded-lg" />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-2xl">{news.title}</h2>
        <p className="text-accent">{news.details}</p>
        <div className="card-actions">
          <Link
            to={`/category/${news.category_id}`}
            className="btn btn-secondary"
          >
            <IoArrowBackSharp />
            All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
