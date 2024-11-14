import { useMutation } from '@apollo/client';
import { CREATE_USER } from 'app/graphql/mutation/users';
import client from 'app/lib/apollo-client';

export const useCreateUser = () => {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER, {
    client,
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    }
  });

  return { createUser, data, loading, error };
};
