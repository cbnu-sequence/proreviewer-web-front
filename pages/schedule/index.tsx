import Head from 'next/head';
import Header from '../../components/common/Header';
import Schedule from '../../components/Schedule';

const SchedulePage = () => {
  return (
    <>
      <Head>
        <title>일정표</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Schedule />
    </>
  );
};

export default SchedulePage;
