import Head from 'next/head';
import Redirect from '../../components/Redirect';

const RedirectPage = () => {
  return (
    <>
      <Head>
        <title>로그인</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Redirect />
    </>
  );
};

export default RedirectPage;
