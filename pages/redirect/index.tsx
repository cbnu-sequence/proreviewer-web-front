import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { githubLogin } from '../../apis/auth';
import Loading from '../../components/common/Loading';
import { UseLoginMutation } from '../../state/react-query/hooks/auth';
import { tokenDataTypes } from '../../types/type';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../state/recoil/user';
import { LOGIN_METHOD } from '../../constants/login';
import { setCookie } from '../../user-storage';
function Redirect() {
  const router = useRouter();
  const setUser = useSetRecoilState(userState);
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get(
      'code'
    ) as string;
    const { isSuccess, mutate } = UseLoginMutation(LOGIN_METHOD.GITHUB);
    mutate(
      { accessToken: code },
      {
        onSuccess: (data: tokenDataTypes) => {
          // access는 리코일 상태에
          setUser({ accessToken: data.accessToken });
          // refresh는 쿠키에
          setCookie('refresh', data.refreshToken);
        },
      }
    );
    githubLogin({ accessToken: code });
    isSuccess && router.push('/');
  }, [router, setUser]);

  return (
    <>
      <Loading />
    </>
  );
}

export default Redirect;
