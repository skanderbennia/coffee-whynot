import "./App.css";
import AppMenu from "./pages/AppMenu/AppMenu";
import ModalContext from "./context/modalContext";
import { useState } from "react";
function App() {
  const [modalInformation, setModalInformation] = useState(null);
  return (
    <div className="appContainer">
      <ModalContext.Provider value={{ modalInformation, setModalInformation }}>
        <AppMenu />
      </ModalContext.Provider>
    </div>
  );
}

export default App;
