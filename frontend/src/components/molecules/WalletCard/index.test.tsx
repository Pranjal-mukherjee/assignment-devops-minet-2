import { render, screen } from "@testing-library/react";
import WalletCard from ".";
import {   RUPEE_COIN_ALT, USD_COIN_TEXT, USD_TEXT } from "../../../utils/constants";
import { theme } from "../../../theme";
import RupeeImage from "../../../../public/assets/images/rupee.svg"


describe('Wallet card molecule', () => {
    
  it('should render the wallet card molecule', () => {
    const args= {
    src: RupeeImage,
    alt: RUPEE_COIN_ALT,
    firstText: USD_COIN_TEXT,
    firstTextColor: theme.palette.textColor.highEmp,
    secondText: USD_TEXT,
    secondTextColor: theme.palette.textColor.medEmp,
    secondTextVariant: "caption2",
    thirdText: "$ 0.00",
    thirdTextColor: theme.palette.textColor.highEmp,
    thirdTextVariant: "body1"
  }
    const element = render(<WalletCard src={ args.src} alt={args.alt} firstText={args.firstText} firstTextVariant={"body1"} firstTextColor={args.firstTextColor} secondText={args.secondText} secondTextColor={args.secondTextColor} secondTextVariant={"caption1"} thirdText={args.thirdText} thirdTextColor={args.thirdTextColor} thirdTextVariant={"body1"}/>)

    expect(element).toBeDefined();
    expect(screen.getByAltText(args.alt)).toBeDefined();
    expect(screen.getByText(args.firstText)).toBeDefined();
    expect(screen.getByText(args.secondText)).toBeDefined();
    expect(screen.getByText(args.thirdText)).toBeDefined();

  })
})
