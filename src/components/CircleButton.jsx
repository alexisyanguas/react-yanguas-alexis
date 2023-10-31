import styled from "@emotion/styled";
import { useState } from "react";

const isDisabled = false;

const CircleButton = ({ width, height, svg, color, ...props }) => {
  console.log('color :>> ', color);
  return (
    <CircleButtonStyle width={width} height={height} color={color} {...props}>
      <img src={svg} style={{ width: 25, height: 25 }} />
    </CircleButtonStyle>
  );
};

const CircleButtonStyle = styled.button`
  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};
  background-color: ${({ color }) => `${color}` || "#ffe6c9"};
  border: 1px solid #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
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

export default CircleButton;
