import { StyledLogin } from './styles';

const Login = () => {
  return (
    <StyledLogin>
      <form>
        <h1 className="logo">Pro Reviewer</h1>
        <input className="email" type="email" placeholder="이메일" />
        <input className="password" type="password" placeholder="비밀번호" />
        <button type="submit">로그인</button>
      </form>
    </StyledLogin>
  );
};

export default Login;
