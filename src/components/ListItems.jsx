import styled from "@emotion/styled";
import Avatar from "./Avatar";

const ListItem = ({ name, avatar, onClick }) => {
  return (
    <ItemContainer onClick={onClick}>
      <Avatar avatar={avatar} />
      <Span>{name}</Span>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  padding: 1rem;
  border-radius: 4rem;
  &:hover {
    cursor: pointer;
    background-color: #eee;
    transition: background 0.3s;
  }
`;

const Span = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
`;



export default ListItem;
