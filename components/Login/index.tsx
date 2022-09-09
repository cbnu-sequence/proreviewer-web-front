import Image from 'next/image';
import Link from 'next/link';
import { useCustomToast } from '../../common/hooks/useCustomToast';
import { useInput } from '../../common/hooks/useInput';
import { UseLoginMutation } from '../../state/react-query/hooks/auth';
import { StyledLogin } from './styles';

const Login = () => {
  const { mutate } = UseLoginMutation();

  const toast = useCustomToast();

  const email = useInput('');
  const password = useInput('');

  const onSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!email.value) {
      toast({
        title: '이메일을 입력해주세요.',
        status: 'warning',
      });
    } else if (!password.value) {
      toast({
        title: '비밀번호를 입력해주세요.',
        status: 'warning',
      });
    } else {
      mutate({ email: email.value, password: password.value });
    }
  };

  return (
    <StyledLogin>
      <form onSubmit={onSubmitForm}>
        <input
          className="email"
          type="email"
          placeholder="이메일"
          onChange={email.onChange}
          value={email.value}
        />
        <input
          className="password"
          type="password"
          placeholder="비밀번호"
          onChange={password.onChange}
          value={password.value}
        />
        <button type="submit">로그인</button>
      </form>
      <div className="register-proreviewer">
        <span>계정이 없으신가요?</span>
        <Link href="/register" passHref>
          간편 회원가입
        </Link>
      </div>
      <div className="register-api">
        <div className="register-google">
          <Image
            src="/google.png"
            width="19px"
            height="19px"
            alt="구글 로그인"
          />
        </div>
        <div className="register-github">
          <Image
            src="/github.png"
            width="20px"
            height="20px"
            alt="깃허브 로그인"
          />
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
