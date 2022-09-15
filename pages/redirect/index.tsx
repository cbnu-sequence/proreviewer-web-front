import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { githubLogin } from '../../apis/auth';
import Loading from '../../components/common/Loading';
import { UseLoginMutation } from '../../state/react-query/hooks/auth';

const Redirect = () => {
  const router = useRouter();
  //   useEffect(() => {
  //     const code = new URL(window.location.href).searchParams.get(
  //       'code'
  //     ) as string;
  //     const { isSuccess } = UseLoginMutation(() => githubLogin({ code: code }));
  //     isSuccess && router.push('/');
  //   }, [router]);

  return (
    <>
      <Loading />
    </>
  );
};

export default Redirect;
