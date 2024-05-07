import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { theme } from "../../../theme";

export const MainContainer = styled(Grid)({
    minWidth: "710px",
    height: "318px",
    gap: theme.spacing(2),
    alignItems: "flex-start",
    flexDirection: "column",
    padding: theme.spacing(5),
    border: `1px solid ${theme.palette.gray[100]}`,
    background: theme.palette.gray.white,
    borderRadius: theme.spacing(0),
    display: "flex",
})

export const AmountContainer = styled(Grid)({
    width: "100%",
    padding: theme.spacing(3),
    justifyContent: "space-between",
    alignItems: "center",
    border: `1px solid ${theme.palette.gray[100]}`,
    background: theme.palette.gray.white,
    borderRadius: theme.spacing(0),
    flexDirection: "row",
    height: "74px"
})

export const SliderLabelContainer = styled(Grid)({
    display: "flex",
    gap: theme.spacing(2),
    alignItems: "center",
})

export const buttonSx = {
    padding: `0px 16px !important`,
}

export const DataContainer = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    width: "100%",
})
