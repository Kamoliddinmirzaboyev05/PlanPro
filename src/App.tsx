import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Toaster } from "sonner";
function App() {
  
  return (
    <BrowserRouter>
      <Toaster position="top-center" />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
