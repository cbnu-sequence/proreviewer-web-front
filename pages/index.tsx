import Head from 'next/head';
import Home from '../components/Home';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>홈</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
