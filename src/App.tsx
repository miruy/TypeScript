import styled from "styled-components";
import React, { useState } from "react";

function App() {
  // TypeScript는 정의된 초기값으로 데이터의 type을 추론함
  // useState<number|string>(0) : 초기값은 0(number)이지만, number 또는 string으로 사용될 수 있음을 의미
  // const [value, setValue] = useState<number|string>(0);

  const [name, setName] = useState("");

  // event: React.FormEvent(HTMLInputElement) : 해당 event가 <HTMLInputElement>가 만든 이벤트임을 TypeScript에게 알려주는 의미
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
   
    // React.js 와 TypeScript 사용할때 target -> currentTarget
    console.log(event.currentTarget.value); 
   
    // currentTarget.value 사용 방법
    const {
      currentTarget :{value},
    } = event;

    setName(value);
  }


  // event : React.FormEvent<HTMLFormElement> : <HTMLFormElement>가 만든 event임을 알려주는 의미
  const onSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    
    // preventDefault() : 해당 event실행을 막는 메서드(ex. submit의 경우 페이지 창이 이동되어 해당 창으로 데이터를 전달해야함으로 막음)
    event.preventDefault();
    console.log("hello", name);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={name} onChange={onChange} type="text" placeholder="userName" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default App;