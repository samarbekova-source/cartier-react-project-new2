import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import Stores from "./Components/Stores/Stores";

import JewelryContextProvider from "./contexts/jewelryContext";
import Routing from "./Routing";

function App() {
  return (
    <div className="App">

      <JewelryContextProvider>
        <Routing />
      </JewelryContextProvider>

    </div>
  );
}

export default App;
