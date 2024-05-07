import { useMutation } from '@tanstack/react-query';
import { updateUserByEmail } from '../../../services';

interface IUserData {
  email: string;
  updateField: object;
}

export const useUpdateUserData = () => {
  const mutation = useMutation({
    mutationFn: (data: IUserData) => updateUserByEmail(data.email, data.updateField)
  });

  return {
    updateUserData: mutation.mutate,
    updatedData: mutation.data
  };
};
