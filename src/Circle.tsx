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

// text = "default text" : Circle의 props 중 text는 필수가 아니므로 null = default text / not null = 해당 props를 표시
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
    return (
        // borderColor ?? bgColor : 테두리 색 여부는 사용자가 선택(optional,?)하는데, not null =borderColor / null = bgColor표시
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
        {text}
    </Container>
    );
  }

export default Circle;