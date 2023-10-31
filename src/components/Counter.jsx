import styled from '@emotion/styled'
import { useState } from 'react'

const isDisabled = false;

const Counter = ({defaultCount, width, ...props}) => {
  const [count, setCount] = useState(defaultCount)
  console.log(width);
  return (
    <Button
      onClick={() => setCount((count) => count + 1)}
      count={count}
      width={width}
    >
      count is {count}
    </Button>
  );
}

const Button = styled.button`
  background: ${({ count }) => (count > 5 ? "red" : "blue")};
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #333;
  width: ${({ width }) => `${width}px`};
  font-size: 16px;
  padding: 4px 8px;
  margin: 0 4px;
`;




export default Counter
