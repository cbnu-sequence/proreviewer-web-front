import Head from 'next/head';
import SideBar from '../common/components/SideBar';
import Home from '../components/Home';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>홈</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
      <Home />
    </>
  );
};

export default HomePage;
