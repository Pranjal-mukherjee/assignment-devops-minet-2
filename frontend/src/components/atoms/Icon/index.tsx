import { styled } from "@mui/material";
import React from "react";

export interface IconComponentProps {
  width?: string;
  height?: string;
  src?: string;
  alt?:string,
  style?: React.CSSProperties;
}

const StyledIcon = styled("img")((props: IconComponentProps) => ({
  height: props.height,
  width: props.width
}));

const IconComponent: React.FC<IconComponentProps> = (
  { src, width, height ,alt,style}
) => {
  return (
      <StyledIcon
        data-testid="iconComponent"
        src={src}
        width={width}
        height={height}
        alt={alt}
        style={style}
      />
  );
};

export default IconComponent;