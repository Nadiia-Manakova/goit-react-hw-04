import React from "react";
import css from "./ImageCard.module.css";

export const ImageCard = ({ url, alt, link, onClick }) => (
  <div className={css.imageCard} onClick={onClick}>
    <img className={css.image} src={url} alt={alt} />
  </div>
);
