import React from "react";
import { screen, render } from "@testing-library/react";
import IconTypographyStack from ".";
import BitCoin from "../../../../public/assets/images/bitcoin.svg"
import GreenArrow from "../../../../public/assets/images/greenArrow.svg";
import { BITCOIN_ALT, MARKET_CAP_ALT } from "../../../utils/constants";


describe('IconTypography Stack', () => {
    it('should render the first variant of icon typography stack', () => {
        const element = render(<IconTypographyStack firstText={MARKET_CAP_ALT} secondText="$64.2T"/>)
        expect(element).toBeDefined();
        expect(screen.getByText(MARKET_CAP_ALT)).toBeDefined();
    })

    it("should render the second variant of icon typography stack", () => {
        const element = render(<IconTypographyStack firstText={BITCOIN_ALT} secondText="$64.2T" coinIcon={BitCoin} coinIconAlt={BITCOIN_ALT} changeIcon={GreenArrow} changeData="+8.2%"/>)
        expect(element).toBeDefined();
        expect(screen.getByText(BITCOIN_ALT)).toBeDefined();
        expect(screen.getByAltText(BITCOIN_ALT)).toBeDefined();
        expect(screen.getByText("+8.2%")).toBeDefined();
    })

    it("should render the third variant of icon typography stack",()=> {
        const element = render(<IconTypographyStack firstText={BITCOIN_ALT} secondText="$64.2T" coinIcon={BitCoin} coinIconAlt={BITCOIN_ALT} />)
        expect(element).toBeDefined();
        expect(screen.getByText(BITCOIN_ALT)).toBeDefined();
        expect(screen.getByAltText(BITCOIN_ALT)).toBeDefined();
    })

    it("should render the fourth variant of icon typography stack", () => {
        const element = render(<IconTypographyStack firstText={BITCOIN_ALT} secondText="$64.2T" coinIcon={BitCoin} coinIconAlt={BITCOIN_ALT} changeIcon={GreenArrow} changeData="+8.2%" dashboard={true}/>)
        expect(element).toBeDefined();
        expect(screen.getByText(BITCOIN_ALT)).toBeDefined();
        expect(screen.getByAltText(BITCOIN_ALT)).toBeDefined();
        expect(screen.getByText("+8.2%")).toBeDefined();
    })
})
