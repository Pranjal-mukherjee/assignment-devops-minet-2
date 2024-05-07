import styled from "@emotion/styled"
import { Grid } from "@mui/material"
import { theme } from "../../../theme"

export const MainContainer = styled(Grid)({
    flexDirection: "column",
    gap: theme.spacing(1),
    maxWidth: "100%"
})

export const DataContainer = styled(Grid)({
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: '10px',
    alignItems: "center"
})

export const BodyContainer = styled(Grid)({
    flexDirection: "row",
    flexWrap: "nowrap",

})

export const LeftContainer = styled(Grid)({
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: theme.spacing(0)
})

export const RightContainer = styled(Grid)({
    flexDirection: "column",
    alignItems: 'flex-end',
    justifyContent: "space-between",
    gap: theme.spacing(0)
})

export const IconContainer = styled(Grid)({
    background: theme.palette.success[100],
    borderRadius: "100px",
    padding: '6px',
    width: "44px",
    height: "44px",
})