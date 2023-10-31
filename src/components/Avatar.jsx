import styled from "@emotion/styled";
import { useState } from "react";


const Avatar = ({avatar }) => {
  return <AvatarStyle src={avatar}/>;
};

const AvatarStyle = styled.img`
    width: 5rem;
    height: 5rem;
    background-color: #FFe6c9;
    border: none;
    border-radius: 50%;
    color: #333;
    font-size: 20px;
    font-weight: 600;
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Avatar;
