import styled, {
  css,
  FlattenInterpolation,
  ThemedStyledProps,
  DefaultTheme
} from "styled-components";
import type { ButtonProps } from "./Button";

const buttonStyles: Record<
  NonNullable<ButtonProps["variant"]>,
  FlattenInterpolation<ThemedStyledProps<ButtonProps, DefaultTheme>>
> = {
  primary: css`
    padding: 10px 20px;
    background-color: #f50057;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #ff4081;
    }
  `,
  secondary: css``
};

export const Button = styled("button")<ButtonProps>`
  ${({ variant }) => buttonStyles[variant!]}
`;
