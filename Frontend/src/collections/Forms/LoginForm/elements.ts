import styled, { css } from "styled-components";
import { Button as _Button, Input as _Input } from "components";

export const Form = styled.form(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
  `
);

export const Button = styled(_Button)(() => css``);

export const Input = styled(_Input)(() => css``);
