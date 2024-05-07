import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { theme } from "../../../theme";

export const MainContainer = styled(Grid)({
    flexDirection: "row",
    gap: theme.spacing(0),
    alignItems: "center"
})