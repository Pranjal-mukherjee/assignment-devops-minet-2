import { Stack } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import { theme } from '../../../theme';
import website from '../../../../public/assets/images/website.svg';
import document from '../../../../public/assets/images/paperWork.svg';
import {
  ABOUT_BITCOICOIN,
  BITCOIN_DESCRIPTION,
  OFFICIAL_WEBSITE,
  RESOURCES,
  WHITE_PAPER
} from '../../../utils/constants';
import {
  AboutContainer,
  CryptoDetailContainer,
  StyledIcon,
  StyledResourceTypography
} from './style';

 const CryptoDetails = () => {
  return (
    <CryptoDetailContainer>
      <AboutContainer>
        <TypographyComponent variant="body1" color={theme.palette.textColor.highEmp}>
          {ABOUT_BITCOICOIN}
        </TypographyComponent>
        <TypographyComponent variant="body2">{BITCOIN_DESCRIPTION}</TypographyComponent>
      </AboutContainer>
      <Stack>
        <StyledResourceTypography variant="body1">{RESOURCES}</StyledResourceTypography>
        <Stack direction={'row'} alignItems={'center'}>
          <StyledIcon src={website} alt="website-logo" />
          <TypographyComponent variant="body2" color={theme.palette.primary[500]}>
            {OFFICIAL_WEBSITE}
          </TypographyComponent>
        </Stack>
        <Stack direction={'row'} alignItems={'center'}>
          <StyledIcon src={document} alt="document-icon" />
          <TypographyComponent variant="body2" color={theme.palette.primary[500]}>
            {WHITE_PAPER}
          </TypographyComponent>
        </Stack>
      </Stack>
    </CryptoDetailContainer>
  );
};
export default CryptoDetails;