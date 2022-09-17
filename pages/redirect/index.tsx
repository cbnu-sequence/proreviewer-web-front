import { useEffect } from 'react';
import Loading from '../../components/common/Loading';
import UseLoginMutation from '../../state/react-query/hooks/auth';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../state/recoil/user';
import { LOGIN_METHOD } from '../../constants/login';

function Redirect() {
  const setUser = useSetRecoilState(userState);
  const { mutate } = UseLoginMutation(LOGIN_METHOD.GITHUB);
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
}

export default Redirect;
