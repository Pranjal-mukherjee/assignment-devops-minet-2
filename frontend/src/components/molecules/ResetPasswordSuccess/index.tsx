import React from "react";
import { Stack, styled } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import { theme } from "../../../theme";
import IconComponent from "../../atoms/Icon";

const MainStack = styled(Stack)(() => ({
  width: "100%",
  height: "19%",
  display: "flex",
  flexDirection: "row",
  gap: "12px",
  padding: "24px",
  border: `1px solid ${theme.palette.gray[100]}`,
  borderRadius: "12px",
  backgroundColor: theme.palette.primary[100],
}));

interface ResetPasswordSuccessProps  {
  img?: string;
  alt?: string;
  mainTitle?: string;
  subTitle?: string;
}

const ResetPasswordSuccess = (Props: ResetPasswordSuccessProps ) => {
  return (
    <MainStack>
      <IconComponent src={Props.img} width="32px" height="32px" alt={Props.alt}/>
      <Stack display={"flex"} direction={"column"}>
        <TypographyComponent
          variant="body1"
          color={theme.palette.textColor.highEmp}
        >
          {Props.mainTitle}
        </TypographyComponent>
        <TypographyComponent
          variant="body2"
          color={theme.palette.textColor.medEmp}
        >
          {Props.subTitle}
        </TypographyComponent>
      </Stack>
    </MainStack>
  );
};

export default ResetPasswordSuccess;
