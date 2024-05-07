import { Box, styled } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import React, { MouseEventHandler } from 'react';
import IconComponent from '../../atoms/Icon';
import { pxToRem, theme } from '../../../theme';
import { TypographyVariant } from '../../../utils/constants';

export interface IconTypographyProps {
  src: string;
  alt?: string;
  iconWidth?: string;
  iconHeight?: string;
  text: string;
  fontColor?: string;
  isCardStyled?: boolean;
  variant: TypographyVariant;
  onClick?: MouseEventHandler;
  padding?: string;
}

const StyledContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: pxToRem(157),
  height: pxToRem(96),
  backgroundColor: theme.palette.primary[100],
  border: `1px solid ${theme.palette.gray[100]}`,
  borderRadius: theme.spacing(2),
  padding: '20px, 40px',
  '&:hover': {
    cursor: 'pointer'
  },
  gap: theme.spacing(1)
}));

const EmptyContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: pxToRem(300),
  gap: theme.spacing(2)
});

 const IconTypography: React.FC<IconTypographyProps> = ({
  src,
  alt,
  iconHeight,
  iconWidth,
  text,
  fontColor,
  variant,
  isCardStyled,
  onClick,
  padding,
  ...props
}) => {
  const Container = isCardStyled ? StyledContainer : EmptyContainer;

  return (
    <Container onClick={onClick} gap={padding}>
      <IconComponent src={src} alt={alt} width={iconWidth} height={iconHeight} />
      <TypographyComponent variant={variant} color={fontColor}>
        {text}
      </TypographyComponent>
    </Container>
  );
};
export default IconTypography;
