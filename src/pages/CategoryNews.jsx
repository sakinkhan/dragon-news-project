import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (Number(id) === 0) {
      setCategoryNews(data);
      return;
    } else if (Number(id) === 1) {
      const filteredData = data.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategoryNews(filteredData);
    } else {
      const filteredData = data.filter(
        (news) => Number(news.category_id) === Number(id)
      );
      setCategoryNews(filteredData);
    }
  }, [data, id]);
  return (
    <div>
      <p className="font-semibold mb-5">
        Total <span className="text-secondary">{categoryNews.length}</span>{" "}
        Found
      </p>
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
