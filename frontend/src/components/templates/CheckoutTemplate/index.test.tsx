
import CheckoutTemplate from '.';
import { render } from '../../../test-setup';
import  NavBar  from '../../organisms/NavBar';
describe('Checkout template component', () => {
  it('should render  Checkout template component', () => {
    const element = render(<CheckoutTemplate navbar={<NavBar/>} />);
    expect(element).toBeDefined();
  });
});
