import { createTheme, CssBaseline, Switch, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Route, Router } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductCard from "../../features/catalog/ProductCard";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import Header from "./Header";

function App() {
  const [DarkMode, setDarkMode] = useState(false);
  const palleteType = DarkMode ? 'light' : 'dark';

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
         <Route exact path='/' component={HomePage} />
         <Route exact path='/catalog' component={Catalog} />
         <Route path='/catalog/:id' component={ProductDetails} />
         <Route path='/about' component={AboutPage} />
         <Route path='/contact' component={ContactPage} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
