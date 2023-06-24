import * as S from "./elements";

export const LoginForm = () => {
  return (
    <S.Form>
      <S.Input placeholder='email' />
      <S.Input placeholder='password' />
      <S.Button type='submit'>Login</S.Button>
    </S.Form>
  );
};
