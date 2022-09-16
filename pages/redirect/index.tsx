import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { githubLogin } from '../../apis/auth';
import Loading from '../../components/Loading';
import { UseLoginMutation } from '../../state/react-query/hooks/auth';
import { socialLoginDataType } from '../../types/type';

const Redirect = () => {
  const router = useRouter();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get(
      'code'
    ) as string;
    const callback = (data: socialLoginDataType) => githubLogin(data);
    const { isSuccess, mutate } = UseLoginMutation(callback);
    mutate({ code: code });
    isSuccess && router.push('/');
  }, [router]);

  return (
    <>
      <Loading />
    </>
  );
};

export default Redirect;
