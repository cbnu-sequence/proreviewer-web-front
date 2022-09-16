import Head from 'next/head';
import Calendar from '../../components/Calendar';
import Header from '../../components/common/Header';

const CalendarPage = () => {
  return (
    <>
      <Head>
        <title>일정표</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Calendar />
    </>
  );
};

export default CalendarPage;
