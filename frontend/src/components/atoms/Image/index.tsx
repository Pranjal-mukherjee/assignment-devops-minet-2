import React from "react";
import { Image as MuiImage } from "mui-image";

export interface ImageProps {
  src: string;
  alt: string;
  sx?: React.CSSProperties;
}

const Image = ({ src, alt, sx}: ImageProps) => {
  return <MuiImage src={src} alt={alt} style={sx} duration={0} />;
};

export default Image;
