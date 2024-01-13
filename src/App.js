import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Update from "./Pages/Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
