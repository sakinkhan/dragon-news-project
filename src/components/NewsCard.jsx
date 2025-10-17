import React from "react";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { format } from "date-fns";
import { CiBookmark } from "react-icons/ci";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details, tags } =
    news;

  const formattedDate = format(new Date(author.published_date), "yyyy-MM-dd");

  return (
    <div className="card bg-base-100 shadow-lg border border-base-200 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-5 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-base text-[#1C1C1C]">
              {author.name}
            </h3>
            <p className="text-sm text-gray-400">{formattedDate}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 flex gap-2 items-center">
          <CiBookmark size={20} />
          <FaShareAlt size={18} />
        </button>
      </div>

      {/* Title */}
      <div className="px-5 mt-3">
        <h2 className="text-lg font-bold text-[#1C1C1C] leading-snug">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-5 mt-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Description */}
      <div className="px-5 mt-4 text-gray-500 text-sm leading-relaxed">
        <p>
          {details.length > 200 ? details.slice(0, 200) + "... " : details}
          {details.length > 200 && (
            <span className="text-[#FF8C47] font-semibold cursor-pointer hover:underline">
              Read More
            </span>
          )}
        </p>
        <div className="text-xs text-gray-400 mt-2">
          {tags && tags.length > 0 && (
            <p>
              <span className="font-semibold">Tags:</span> {tags.join(", ")}
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-4 border-t border-base-200 mt-4">
        <div className="flex items-center gap-2 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < rating.number ? "text-orange-500" : "text-gray-300"
              }
            />
          ))}
          <span className="text-gray-700 font-semibold ml-1">
            {rating.number.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span className="font-medium">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
