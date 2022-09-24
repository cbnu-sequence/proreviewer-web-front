import { useEffect } from 'react';
import Loading from '../../components/common/Loading';
import UseLoginMutation from '../../state/react-query/hooks/auth';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../state/recoil/user';
import { LOGIN_METHOD } from '../../constants/login';

function Google() {
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
}
export default Google;
