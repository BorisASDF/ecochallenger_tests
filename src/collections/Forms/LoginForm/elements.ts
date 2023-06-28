import styled, { css } from "styled-components";
import { Button as _Button, Input as _Input } from "components";

export const Form = styled.form(() => css`
      font-size: 1.5rem;
      width: 100%;
      max-width: 25ch;
      margin: 0 auto;
      text-align: center;
  
`);

export const Button = styled(_Button)(() => css`
  display: inline-block;
  color: #7FFF00;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #7FFF00;
  border-radius: 3px;
  display: block;
`);

export const Input = styled(_Input)(() => css`
    width: clamp(120px, 50vw, 420px);
    height: 2.5rem;
    padding: 0 1.25rem;
    border: 1px solid $black;
    border-radius: 2px;
    margin: 0.625rem auto;
`);
