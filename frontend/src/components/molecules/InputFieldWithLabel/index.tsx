import { Stack } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import InputFieldComponent, { InputFieldProps } from '../../atoms/InputField';
import { pxToRem } from '../../../theme';

export interface InputFieldWithLabelProps extends InputFieldProps {
  text: string;
}

const InputFieldWithLabel: React.FC<InputFieldWithLabelProps> = ({ text, ...props }) => {
  return (
    <Stack direction={'column'}>
      <TypographyComponent variant="caption1" marginBottom={pxToRem(6)}>
        {text}
      </TypographyComponent>
      <InputFieldComponent {...props} />
    </Stack>
  );
};
export default InputFieldWithLabel;