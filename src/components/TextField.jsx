import styled from "@emotion/styled";
import { useState } from "react";

const TextField = ({ ...props }) => {
  return <TextFieldStyle {...props} />;
};

const TextFieldStyle = styled.input`
    width: 100%;
    height: 2rem;
    background-color: #FFe6c9;
    border: none;
    border-radius: 16px;
    color: #333;
    font-size: 20px;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    &:focus {
        outline: none;
        border: 1px solid #ddd;
    }
    &::placeholder {
        color: #333;
        font-size: 20px;
        font-weight: 600;
    }
    
  
`;

export default TextField;
