import styled from "@emotion/styled";

const Header = () => {
  return (
    <HeaderStyled
      className="header"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <h1>Header</h1>
      <a href={"/users"}>Users</a>
      <a href={"/posts"}>Posts</a>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
    background-color: #333;
    color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    column-gap: 1rem;
    a {
        text-decoration: none;
        color: #fff;
        font-size: 1.5rem;
        font-weight: 600;
        &:hover {
            color: #eee;
        }
    }
`;



export default Header;
