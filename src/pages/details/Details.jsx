import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

import UseFetch from "../../components/hooks/UseFetch";
import DetailsBanner from "./banner/DetailsBanner";
const Details = () => {
  // const { mediaType, id } = useParams();
  // const { data, loading } = UseFetch(`/${mediaType}/${id}`);


  return( 
  <div>details content
    <DetailsBanner/>
  </div>
  );
};

export default Details;
