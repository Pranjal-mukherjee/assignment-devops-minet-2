import { Meta, StoryFn } from '@storybook/react';
import MyPortfolio from '../../../../public/assets/images/myPortfolio.svg';
import Bitcoin from '../../../../public/assets/images/bitcoin.svg';
import Ethereum from '../../../../public/assets/images/ethereum.svg';
import Image, { ImageProps } from '.';

const meta: Meta = {
  title: 'Atoms/Image',
  component: Image
};
export default meta;
const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const MyPortfolioImage = Template.bind({});

MyPortfolioImage.args = {
  src: MyPortfolio,
  alt: 'portfolio-image',
  sx: {
    height: '223px',
    width: '297px',
    marginRight:"auto"
  }
};

export const BitcoinImage = Template.bind({});

BitcoinImage.args = {
  src: Bitcoin,
  alt: 'Bitcoin-image',
  sx: {
    height: '48px',
    width: '48px',
    marginRight:"auto"
  }
};

export const EthereumImage = Template.bind({});

EthereumImage.args = {
  src: Ethereum,
  alt: 'ethereum-image',
  sx: {
    height: '48px',
    width: '48px',
    marginRight:"auto"
  }
};


