import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import Landing from "./pages/Landing";
import NavBar from "./components/navbar/nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Form />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
