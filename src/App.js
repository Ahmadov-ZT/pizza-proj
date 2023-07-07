import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { GlobalStyle } from "./GlobalStyles";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose Your Favorite" data={productData} />
      <Feature/>
      <Products heading="Sweet Treats For You" data={productDataTwo} />
      <Footer/>
    </Router>
  );
}

export default App;
