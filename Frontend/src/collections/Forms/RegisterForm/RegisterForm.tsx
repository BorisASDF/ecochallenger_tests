import * as S from "./elements";

export const RegisterForm = () => {
  return (
    <S.Form>
      <S.Input placeholder='email' />
      <S.Input placeholder='password' />
      <S.Input placeholder='confirm password' />
      <S.Button type='submit'>Register</S.Button>
    </S.Form>
  );
};
