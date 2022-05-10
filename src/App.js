import React from "react";
import { CssBaseline } from "@mui/material";
import GlobalStyle from "commons/styles/global-style";
import Main from './containers/Main';


function App() {
  return (
    <div>
      <CssBaseline />
      <GlobalStyle />      
      <h2 className="titulo">Atualizações da COVID-19 nos países do Mercosul</h2>
      <Main />
    </div>
  );
}

export default App;
