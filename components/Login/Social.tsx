import Image from 'next/image';
import Link from 'next/link';

const Social = () => {
  const GITHUB_LOGIN_URI = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_AUTH_CLIENT_KEY}&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000/redirect`;
  return (
    <div className="social">
      <div className="social__google">
        <Image src="/google.png" width="19px" height="19px" alt="구글 로그인" />
      </div>
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
