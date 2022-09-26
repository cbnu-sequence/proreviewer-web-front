import Head from 'next/head';
import Google from '../../components/Redirect/google';

const RedirectPage = () => {
  return (
    <>
      <Head>
        <title>로그인</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Google />
    </>
  );
};

export default RedirectPage;
