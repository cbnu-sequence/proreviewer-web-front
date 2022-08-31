import { StyledLogin } from './styles';
import { useRecoilState } from 'recoil';
import { loginState } from '../../recoil/login';

const Login = () => {
  const [loginstate, setLoginState] = useRecoilState<loginState>(loginState);
  const { email, password } = loginstate;

  const onChangeInput = (e: { target: { name: string; value: string } }) => {
    setLoginState({ ...loginstate, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <StyledLogin>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="이메일"
          onChange={onChangeInput}
          name="email"
          value={email}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={onChangeInput}
          name="password"
          value={password}
        />
        <button type="submit">로그인</button>
      </form>
    </StyledLogin>
  );
};

export default Login;
