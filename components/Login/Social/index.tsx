import Image from 'next/image';
import Link from 'next/link';

const Social = () => {
  const GITHUB_LOGIN_URI = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_AUTH_CLIENT_KEY}&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000/redirect`;
  const GOOGLE_LOGIN_URI = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID}&redirect_uri=http://localhost:3000/redirect/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid`;

  return (
    <div className="social">
      <div className="social__logo">
        <Image
          src="/proReLogo.png"
          width="300px"
          height="60px"
          alt="프로리뷰어 로고"
        />
      </div>
      <Link href={GOOGLE_LOGIN_URI} passHref>
        <div className="social__google">
          <span className="social__image">
            <Image
              src="/google.png"
              width="19px"
              height="19px"
              alt="구글 로그인"
            />
          </span>
          <span className="social__text">구글 로그인</span>
        </div>
      </Link>
      <Link href={GITHUB_LOGIN_URI} passHref>
        <div className="social__github">
          <span className="social__image">
            <Image
              src="/github.png"
              width="22px"
              height="22px"
              alt="깃헙 로그인"
            />
          </span>
          <span className="social__text">깃허브 로그인</span>
        </div>
      </Link>
    </div>
  );
};

export default Social;
