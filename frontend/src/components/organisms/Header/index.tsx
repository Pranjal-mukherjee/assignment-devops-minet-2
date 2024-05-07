import { Box, Divider, Grid, Stack, styled } from '@mui/material';
import React from 'react';
import TypographyComponent from '../../atoms/Typography';
import ButtonComponent from '../../atoms/Button';
import { theme } from '../../../theme';
import Avatar from '../../atoms/Avatar';
import profile from '../../../../public/assets/images/avatar.svg';
import DownIcon from '../../../../public/assets/images/chevronDown.svg';
import Image from '../../atoms/Image';

export interface IHeaderProps {
  pageName: string;
  displayButtons: boolean;
  onSell?: React.MouseEventHandler<HTMLButtonElement>;
  onBuy?: React.MouseEventHandler<HTMLButtonElement>;
  disableBuy?: boolean;
  disableSell?: boolean;
}

const CustomBox = styled(Box)({
  padding: '16px 24px',
  width: '100%',
  backgroundColor: theme.palette.gray.white
});

const CustomButton = styled(ButtonComponent)({
  borderRadius: theme.spacing(0),
  padding: '0px 16px 0px 16px',
  width: '8rem',
  height: '2.5rem'
});

const StyledTypographyComponent = styled(TypographyComponent)({
  paddingTop: '4.5px'
});

const Header: React.FC<IHeaderProps> = ({
  pageName,
  displayButtons,
  onSell,
  onBuy,
  disableBuy,
  disableSell
}: IHeaderProps) => {
  return (
    <CustomBox data-testid="Header">
      <Grid container>
        <Grid item xs={6}>
          <StyledTypographyComponent variant="h6" color={theme.palette.textColor.highEmp}>
            {pageName}
          </StyledTypographyComponent>
        </Grid>

        <Grid
          item
          container
          wrap="nowrap"
          xs={6}
          alignItems="center"
          justifyContent="flex-end"
          columnGap={theme.spacing(4)}>
          {displayButtons && (
            <Grid display="flex" alignItems="row" gap={theme.spacing(2)}>
              <Grid item>
                <CustomButton
                  children={
                    <TypographyComponent variant="button" color={theme.palette.gray.white}>
                      SELL
                    </TypographyComponent>
                  }
                  onClick={onSell}
                  sx={{
                    backgroundColor: theme.palette.warning[300],
                    '&:disabled': {
                      backgroundColor: theme.palette.warning[300]
                    },
                    '&:hover': {
                      backgroundColor: theme.palette.warning[300]
                    }
                  }}
                  disabled={disableSell}
                />
              </Grid>

              <Grid item>
                <CustomButton
                  children={
                    <TypographyComponent variant="button" color={theme.palette.gray.white}>
                      BUY
                    </TypographyComponent>
                  }
                  onClick={onBuy}
                  sx={{
                    backgroundColor: theme.palette.primary[500],
                    '&:disabled': {
                      backgroundColor: theme.palette.primary[500]
                    },
                    '&:hover': {
                      backgroundColor: theme.palette.primary[500]
                    }
                  }}
                  disabled={disableBuy}
                />
              </Grid>
            </Grid>
          )}
          <Divider orientation="vertical" variant="middle" sx={{ height: '32px' }} flexItem />
          <Grid item display="flex" alignItems="center" gap="10px">
            <Stack direction={'row'} alignItems={'center'}>
              <Avatar src={profile} sx={{ width: '32px', height: '32px' }} />
              <Image src={DownIcon} alt={'Drop-Down'} />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </CustomBox>
  );
};

export default Header;
