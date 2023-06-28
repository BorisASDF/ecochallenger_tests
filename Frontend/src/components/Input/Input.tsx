import * as S from "./elements";

export interface InputProps {
  placeholder?: string;
}

export const Input = ({ placeholder, ...props }: InputProps) => {
  return <S.Input placeholder={placeholder} type='text' {...props} />;
};
