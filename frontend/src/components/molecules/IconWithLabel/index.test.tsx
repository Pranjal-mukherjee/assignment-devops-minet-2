import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import LeftArrowImage from "../../../../public/assets/images/chevronLeft.svg";
import InfoImage from "../../../../public/assets/images/info.svg";
import { CHEVRON_LEFT_ALT, COIN_INFO_TEXT, DISCOVER_ASSETS, INFO_ALT } from '../../../utils/constants';
import IconWithLabel from '.';

describe('icon with typography molecule', () => {
    it('should render the icon with typography component', () => {
        const element = render(<IconWithLabel start={true} iconSrc={InfoImage} iconAlt={INFO_ALT} text={COIN_INFO_TEXT} variant='caption2'/>);
        expect(element).toBeDefined();
        expect(screen.getByText(COIN_INFO_TEXT)).toBeDefined();
        expect(screen.getByAltText(INFO_ALT)).toBeDefined();
    })

    it('should render the icon with typography with different props', () => {
        const element = render(<IconWithLabel start={false} iconSrc={LeftArrowImage} iconAlt={CHEVRON_LEFT_ALT} text={DISCOVER_ASSETS} variant='caption2'/>);
        expect(element).toBeDefined();
        expect(screen.getByText(DISCOVER_ASSETS)).toBeDefined();
        expect(screen.getByAltText(CHEVRON_LEFT_ALT)).toBeDefined();
    })
    it("should work for onclick",()=>{
        render(<IconWithLabel start={false} iconSrc={LeftArrowImage} iconAlt={CHEVRON_LEFT_ALT} text={DISCOVER_ASSETS} variant='caption2'/>);
        fireEvent.click(screen.getByTestId("container1"))
    })
})