import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Img = ({ src, clasname }) => {
  return (
    <LazyLoadImage className={clasname || ""} alt="" effect="blur" src={src} />
  );
};

export default Img;
