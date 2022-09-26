import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { LOGIN_METHOD } from '../../constants/login';
import UseLoginMutation from '../../state/react-query/hooks/auth';
import { userState } from '../../state/recoil/user';
import Loading from '../common/Loading';

const Google = () => {
  const setUser = useSetRecoilState(userState);
  const { mutate } = UseLoginMutation(LOGIN_METHOD.GOOGLE);
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get(
      'code'
    ) as string;
    mutate({ code: code });
  }, [setUser, mutate]);

  return (
    <>
      <Loading />
    </>
  );
};
export default Google;
