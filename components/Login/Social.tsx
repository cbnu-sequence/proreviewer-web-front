import Image from 'next/image';

const Social = () => {
  return (
    <div className="social">
      <div className="social__google">
        <Image src="/google.png" width="19px" height="19px" alt="구글 로그인" />
      </div>
      <div className="social__github">
        <Image src="/github.png" width="20px" height="20px" alt="깃헙 로그인" />
      </div>
    </div>
  );
};

export default Social;
