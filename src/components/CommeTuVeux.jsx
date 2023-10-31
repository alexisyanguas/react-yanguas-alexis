import styled from "@emotion/styled";
import Avatar from "./Avatar";
import ListItem from "./ListItems";

const CommeTuVeux = ({ title, body, image, user, onClick }) => {
  return (
    <ItemContainer onClick={onClick}>
      <ListItem name={user.name} avatar={user.avatar}/>
      <div>
        <Span>{title}</Span>
        <Body>{body}</Body>
        <PostImage src={image} />
      </div>
    </ItemContainer>
  );
};

const Body = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    color: #333;
    text-align: justify;
`;

const PostImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export default CommeTuVeux;
