import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Game from "./views/Game.view";
import Home from "./views/Home.view";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/game" Component={Game} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
