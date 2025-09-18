import React from "react";
import MediaQueriesExample from "./components/MediaQueriesExample";
import UnitsExample from "./components/UnitsExample";
import FlexboxGridExample from "./components/FlexboxGridExample";
import BootstrapExample from "./components/BootstrapExample";
import StyledComponentsExample from "./components/StyledComponentsExample";
import CssModulesExample from "./components/CssModulesExample";
import "./App.css";


function App() {
  return (
    <div className="main-container">
      <h1>Ejemplos de Responsive en React</h1>
      <MediaQueriesExample />
      <UnitsExample />
      <FlexboxGridExample />
      <BootstrapExample />
      <StyledComponentsExample />
      <CssModulesExample />
    </div>
  );
}

export default App;
