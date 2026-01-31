import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SearchBar from "./components/Search";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter> */}
      <SearchBar />
    </>
  );
}

export default App;
