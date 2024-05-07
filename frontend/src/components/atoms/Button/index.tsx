import { Button, ButtonProps } from "@mui/material";
import React from "react";
import IconComponent from "../Icon";

export interface ButtonComponentProps extends ButtonProps {
  children: string | React.ReactNode;
  src?:string;
  iconHeight?:string;
  iconWidth?:string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {
  const { children, variant, src,iconHeight,iconWidth,...rest } = props;

  return (
    <Button variant={variant} {...rest}  startIcon={src ? <IconComponent src={src} alt={"icon"} height={iconHeight} width={iconWidth} /> : undefined}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
