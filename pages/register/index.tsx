import Head from 'next/head';
import Register from '../../components/Register';

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>회원가입</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Register />
    </>
  );
};

export default RegisterPage;
