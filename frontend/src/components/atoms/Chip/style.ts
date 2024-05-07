import styled from "@emotion/styled";
import { Chip as MuiChip } from "@mui/material";
import { theme } from "../../../theme";

export const StyledChip = styled(MuiChip)({
    borderRadius: '100px',
    backgroundColor: theme.palette.gray[100],
    padding: "2px 8px",
    color: theme.palette.gray[500],
    "&.MuiTypography-root": {
        textTransform: "none"
    },
    "&.MuiChip-root": {
        paddingLeft: "0px",
        paddingRight: "0px",
        height: "20px"
    }
})