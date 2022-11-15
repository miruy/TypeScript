import { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import { ThemeProvider } from 'styled-components';
import App from './App';
import { lightTheme, darkTheme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App /> 
    </ThemeProvider>  
  </StrictMode>,
);  