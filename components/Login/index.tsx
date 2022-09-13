import Link from 'next/link';
import { useInput } from '../../hooks/useInput';
import { UseLoginMutation } from '../../state/react-query/hooks/auth';
import { StyledLogin } from './styles';
import Social from './Social';
import { useRecoilState } from 'recoil';
import { ToastListState } from '../../state/recoil/toastList';
import uuid from 'react-uuid';

const Login = () => {
  const { mutate } = UseLoginMutation();

  const email = useInput('');
  const password = useInput('');

  const [toastList, setToastList] = useRecoilState(ToastListState);

  const onSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!email.value) {
      setToastList([
        { category: 'Warn', message: '이메일을 입력해주세요.', id: uuid() },
        ...toastList,
      ]);
    } else if (!password.value) {
      setToastList([
        { category: 'Warn', message: '비밀번호를 입력해주세요.', id: uuid() },
        ...toastList,
      ]);
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
      <Social />
    </StyledLogin>
  );
};

export default Login;
