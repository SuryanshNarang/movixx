import React from "react";
import { useState, useEffect } from "react";
//search m enter press krte hi search vle page pr navigate ho for that we are using
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";
import UseFetch from "../../../components/hooks/UseFetch";
import Img from "../../../components/lazyload/Img";
import Contentwrapper from "../../../components/contentwrapper/Contentwrapper"; 
const Herobanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate("");
  const { url } = useSelector((state) => state.home);

  const { data, loading } = UseFetch("/movie/upcoming");
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key == "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="herobanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <Contentwrapper>
        <div className="herobannerContent">
          <span className="title">Welcome</span>
          <span className="subtitle">
            Millions of movies, TV shows and people to discover
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for Movie or TV show"
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </Contentwrapper>
    </div>
  );
};

export default Herobanner;
