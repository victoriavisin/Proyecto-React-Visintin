
import Header from "./componentes/header/header"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App">

      <Header />
      <ItemListContainer usuario= "Miguel" apellido = "Sola"/>

    </div>
  );
}

export default App;
