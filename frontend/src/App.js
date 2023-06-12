import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/Form";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
