import Link from 'next/link';
import { useCustomToast } from '../../common/hooks/useCustomToast';
import { useInput } from '../../common/hooks/useInput';
import { StyledLogin } from './styles';

const Login = () => {
  const email = useInput('');
  const password = useInput('');

  const toast = useCustomToast();

  const onSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    toast({
      title: '시퀀스에 로그인 하신 것을 환영합니다',
      status: 'success',
    });
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
    </StyledLogin>
  );
};

export default Login;
