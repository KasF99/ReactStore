import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {
  const [DarkMode, setDarkMode] = useState(false);
  const palleteType = DarkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })
  
  function handleThemeChange() {
    setDarkMode(!DarkMode);
}
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header DarkMode={DarkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Catalog /*products={products} addProducts={addProducts}*//>
      </Container>
    </ThemeProvider>
  );
}

export default App;
