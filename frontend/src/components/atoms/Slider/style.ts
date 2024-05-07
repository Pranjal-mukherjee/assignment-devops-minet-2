import styled from '@emotion/styled'
import { Slider as MuiSlider } from '@mui/material'
import { theme } from '../../../theme'

export const StyledMuiSlider = styled(MuiSlider)({
    height: '88px',
    width: '2px',
    color: theme.palette.textColor.lowEmp,
    ".MuiSlider-track": {
        width: '2px',
        border: '0px',
        color: theme.palette.textColor.lowEmp
    },
    ".MuiSlider-rail": {
        width: '2px',
        color: theme.palette.textColor.lowEmp,
        opacity: 1
    },
    ".MuiSlider-thumb": {
        width: '13px',
        height: '13px',
    },
})