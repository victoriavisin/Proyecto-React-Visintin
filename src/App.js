import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/header/header"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import Cart from "./componentes/Cart/Cart"
import ItemListDetail from "./componentes/ItemListDetail/ItemListDetail";





function App() {
  return (
    <BrowserRouter>

    <Header/>

    
    
    
    <Routes>

    <Route path="/" element={ <ItemListContainer  /> } />

    <Route path="/category/:categoryName" element={ <ItemListContainer  /> } />

    <Route path="/itemDetail/:id" element={ <ItemListDetail/> } />

    <Route path="/cart" element={ <Cart /> } />

     


    </Routes>

    
    
    
    </BrowserRouter>
  );
}

export default App;
