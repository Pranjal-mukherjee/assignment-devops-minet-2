import { render, screen } from '@testing-library/react';
import Avatar from '.';
import '@testing-library/jest-dom';
import profile from '../../../../public/assets/images/avatar.svg';

describe('AvatarComponent', () => {
  it('should render avatar with provided src and alt', () => {
    render(<Avatar src={profile} alt="avatar" />);
    const avatarElement = screen.getByAltText('avatar');
    expect(avatarElement).toBeInTheDocument();
  });

  it('should render avatar with custom size', () => {
    render(<Avatar src={profile} alt="large-avatar" sx={{ width: 80, height: 80 }} />);
    const avatarElement = screen.getByRole('img');
    expect(avatarElement).toBeInTheDocument();
  });
});
