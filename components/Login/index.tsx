import { useInput } from '../../common/hooks/useInput';
import { StyledLogin } from './styles';

const Login = () => {
  const email = useInput('');
  const password = useInput('');

  return (
    <StyledLogin>
      <form>
        <h1 className="logo">Pro Reviewer</h1>
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
    </StyledLogin>
  );
};

export default Login;
