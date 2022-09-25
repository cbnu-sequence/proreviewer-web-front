import Image from 'next/image';
import Link from 'next/link';

const Social = () => {
  const GITHUB_LOGIN_URI = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_AUTH_CLIENT_KEY}&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000/redirect`;
  const GOOGLE_LOGIN_URI = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID}&redirect_uri=http://localhost:3000/redirect/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid`;

  return (
    <div className="social">
      <Link href={GOOGLE_LOGIN_URI} passHref>
        <div className="social__google">
          <Image
            src="/google.png"
            width="19px"
            height="19px"
            alt="구글 로그인"
          />
        </div>
      </Link>
      <Link href={GITHUB_LOGIN_URI} passHref>
        <div className="social__github">
          <Image
            src="/github.png"
            width="20px"
            height="20px"
            alt="깃헙 로그인"
          />
        </div>
      </Link>
    </div>
  );
};

export default Social;
