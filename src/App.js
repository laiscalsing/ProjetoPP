import { useState } from "react";
import Cadastro from "./paginas/Cadastro/Cadastro";
import Login from "./paginas/Login/Login";
import StyledGlobal from "./styledGlobal";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Rotas from "./Rotas/Rotas";

function App() {

  const styles = {
    global: () => ({
      body: {
        margin: 0,
        padding: 0,
      }
    })
  }

  const theme = extendTheme({ styles })

  return (
    <>
      <ChakraProvider>
      <Rotas/>
      </ChakraProvider>
      
    </>
  );
}

export default App;
