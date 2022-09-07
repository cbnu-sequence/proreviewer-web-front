import Head from 'next/head';
import Login from '../../components/Login';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>로그인</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  );
};

export default LoginPage;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'no-sidebar',
    },
  };
};
