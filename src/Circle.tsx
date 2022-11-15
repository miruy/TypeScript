import { useState } from "react";
import styled from "styled-components";
 
interface CircleProps {
    bgColor: string;
    borderColor?: string; // ?(optional) : interface로 type을 지정하면 자동으로 required(필수)가 됨 -> 필수가 아님으로 변경
    text?: string;
}

interface ContainerProps { 
    bgColor: string;
    borderColor: string;    // ContainerProps에서는 optional이 아님 -> 필수
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${props => props.borderColor};
`;


function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
   
    // TypeScript는 정의된 초기값으로 데이터의 type을 추론함
    // useState<number|string>(0) : 초기값은 0(number)이지만, number 또는 string으로 사용될 수 있음을 의미
    const [value, setValue] = useState<number|string>(0);
    

    return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
        {text}
    </Container>
    );
  }

export default Circle;