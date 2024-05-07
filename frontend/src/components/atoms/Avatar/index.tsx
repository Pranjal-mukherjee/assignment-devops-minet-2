import { Avatar as MuiAvatar, AvatarProps, SxProps } from '@mui/material';
import React from 'react';

export interface AvatarComponentProps extends AvatarProps {
  sx?: SxProps;
  src: string;
  alt?: string;
}

const Avatar: React.FC<AvatarComponentProps> = ({ src, alt, ...props }) => {
  return <MuiAvatar src={src} alt={alt} {...props} />;
};

export default Avatar;
