// App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import Preloader from "./components/preloader";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (!showPreloader) {
      // Небольшая задержка после прелоадера, чтобы анимация начиналась красиво
      const timer = setTimeout(() => {
        setMenuVisible(true);
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [showPreloader]);

  if (showPreloader) {
    return <Preloader onComplete={() => setShowPreloader(false)} />;
  }

  return (
    <header className="head">
      <h1 className="logo">OLEY</h1>

      <div className="headBottomMenu">
        <span className={`menu-item tegA ${menuVisible ? "visible" : ""}`}>
          aboutme
        </span>
        <span className={`menu-item tegA ${menuVisible ? "visible" : ""}`}>
          projects
        </span>
        <span className={`menu-item tegA ${menuVisible ? "visible" : ""}`}>
          fun
        </span>
        <span className={`menu-item tegA ${menuVisible ? "visible" : ""}`}>
          :) 0_0 ^_^ :D ;] xD :P :3 T_T :'( :o O.o @_@ :/ :v -_- ¬_¬ ಠ_ಠ :) 0_0
          ^_^ :D ;] xD :P :3 T_T :'( :o O.o @_@ :/ :v -_- ¬_¬ ಠ_ಠ
        </span>
      </div>
    </header>
  );
}

export default App;
