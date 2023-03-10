import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./componentes/header/header";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Cart from "./componentes/Cart/Cart";
import CartContextProvider from "./context/CartContext";



function App() {

  return (
    
    <BrowserRouter>
    <CartContextProvider>
    <Header/>


      

      <Routes>

        <Route path="/" element={ <ItemListContainer  /> } />

      
        <Route path="/category/:categoryName" element={ <ItemListContainer  /> } />

        <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />

        <Route path="/cart" element={ <Cart /> } />
      

        <Route path="*" element={ <h1>404 Not Found</h1> } />
        

      </Routes>
    </CartContextProvider>

    </BrowserRouter>

  );
}

export default App;

