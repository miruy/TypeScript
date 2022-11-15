import styled from "styled-components";
 
/*
    기본 TypeScript의 형식
    - const x = (a:number, b:number) => a + b 
*/

// 기본 TypeScript의 형식을 interface를 사용하여 객체 형식으로 정의
// interfacr 컴포넌트에 타입을 정의하고 아래(태그형) 또는 기본형으로도 사용 가능
interface CircleProps {
    bgColor: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

// {bgColor}:CircleProps = bgColor는 CircleProps의 객체임을 의미
function Circle({ bgColor }: CircleProps) {
    return <Container bgColor={bgColor} />;
  }

export default Circle;