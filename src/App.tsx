import styled from "styled-components";

// TypeScript의 Type보호를 받으면서 React.js와 styled-components를 연동

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${props => props.theme.textColor};
`; 
 
function App() {
  return (
    <Container>
      <H1>Hello~~</H1>
    </Container>
  );
}

export default App;