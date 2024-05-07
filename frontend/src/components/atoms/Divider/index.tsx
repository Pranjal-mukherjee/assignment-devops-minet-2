import React from "react";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import { theme } from "../../../theme";

export interface DividerProps {
  text?: string;
  color?: string;
  height?:string;
  orientation?: "horizontal" | "vertical"
}

export const divStyle = {
  display: "flex",
  alignItems: "center"
};

 const DividerComponent = (props: DividerProps) => {
  const styleDivider = {
    backgroundColor: props.color ?? theme.palette.grey[100],
    height: props.height,
    orientation : props.orientation
  };

  return (
    <div style={divStyle}>
      <div style={{ flexGrow: 1 }}>
        <Divider sx={styleDivider} />
      </div>
      {props.text && (
        <Typography variant="caption1" sx={{ m: "0px 10px" }} color={theme.palette.textColor.medEmp}>
          {props.text}
        </Typography>
      )}
      <div style={{ flexGrow: 1 }}>
        <Divider sx={styleDivider} />
      </div>
    </div>
  );
};

export default DividerComponent