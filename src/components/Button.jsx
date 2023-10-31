import styled from "@emotion/styled";
import { useState } from "react";

const isDisabled = false;

const Button = ({ width, height, children, ...props }) => {
  return (
    <ButtonStyle width={width} height={height} {...props}>
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};
  background-color: #ffe6c9;
  border: 1px solid #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  color: #333;
  font-size: 20px;
  font-weight: 600;
  outline: none;
  &:active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:hover {
    cursor: pointer;
    border: 1px solid #fff;
    outline: none;
  }
  &:focus {
    border: 1px solid #fff;
    outline: none;
  }
`;

export default Button;
