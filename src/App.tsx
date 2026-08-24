import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="relative w-screen bg-hollow1 text-hollow4">
      <BrowserRouter>
        <main className="flex flex-col">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
