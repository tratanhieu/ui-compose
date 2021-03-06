import styled, { css } from "styled-components";

export const ButtonStyled = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid #ccc;

  ${(props: any) =>
    props.primary &&
    css`
      background: white;
      color: black;
    `}
`;
