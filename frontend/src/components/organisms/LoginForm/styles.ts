import { Grid, styled } from "@mui/material";
import React from "react";
import ButtonComponent from "../../atoms/Button";


export const OuterContainer = styled(Grid)(() => ({
    width: '100%',
    height: '100%',
    minHeight: '768px',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center'
  }));
  
export const LoginOuterDiv = styled(Grid)(({ theme }) => ({
    width: "70%",
    maxWidth: "512px",
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: theme.spacing(4),
  }));
  
export const StyledLoginForm = styled(Grid)(({ theme }) => ({
    width: "102%",
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(3),
    gap:theme.spacing(4)
  }));
  
export const SocialLoginButtons = styled(Grid)(({ theme }) => ({
    display: "flex",
    width: "102%",
    gap:theme.spacing(4),
    marginBottom:theme.spacing(6),
    marginTop:theme.spacing(6)
  }));
  
export const StyledFooterText = styled(Grid)(({ theme }) => ({
    display: "flex",
    gap:theme.spacing(2)
  }));
  
export const StyledButton = styled(ButtonComponent)(({ theme }) => ({
    borderRadius: "6px",
    padding: theme.spacing(0, 2),
    width: "100%",
    height: "42px",
    cursor: "pointer",
    marginBottom:theme.spacing(4)
  }));