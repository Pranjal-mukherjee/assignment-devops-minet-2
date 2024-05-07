import { theme } from '../../../theme';
import  DropDown  from '../../atoms/Dropdown';
import ButtonComponent from '../../atoms/Button';
import {
  FooterContainer,
  FooterPrimaryTypography,
  InnerEndContainer,
  InnerStartContainer,
  MainContainer,
  StyledMinetTypography
} from './style';
import {
  CAREERS,
  DASHBOARD,
  FOOTER_MENU,
  LEGAL_PRIVACY,
  MINET_2021,
  NEED_HELP
} from '../../../utils/constants';

export const Footer = () => {
  return (
    <MainContainer>
      <FooterContainer>
        <InnerStartContainer>
          <FooterPrimaryTypography variant="body2">{DASHBOARD}</FooterPrimaryTypography>
          <FooterPrimaryTypography variant="body2">{CAREERS}</FooterPrimaryTypography>
          <FooterPrimaryTypography variant="body2">{LEGAL_PRIVACY}</FooterPrimaryTypography>
          <StyledMinetTypography variant="body2">{MINET_2021}</StyledMinetTypography>
        </InnerStartContainer>
        <InnerEndContainer>
          <DropDown
            width={'170px'}
            variant="body2"
            fontColor={theme.palette.textColor.highEmp}
            disabled={true}
            menuList={FOOTER_MENU}
          />
          <ButtonComponent children={NEED_HELP} variant="outlined" sx={{ height: '40px' }} />
        </InnerEndContainer>
      </FooterContainer>
    </MainContainer>
  );
};
