import Head from 'next/head';
import Header from '../components/common/Header';
import Home from '../components/Home';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>홈</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Home />
    </>
  );
};

export default HomePage;
