import styled, { css } from "styled-components";

export const Input = styled.input(
  () => css`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  `
);
