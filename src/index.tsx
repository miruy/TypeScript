import { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111"
}

const ligthTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke"
}

root.render(
  <StrictMode>
    <ThemeProvider theme={ligthTheme}> 
      <App />
    </ThemeProvider>
  </StrictMode>,
); 