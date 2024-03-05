import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ExpenseList from "./component/ExpenseList";
import Navebar from "./component/Navebar";
import Footer from "./component/Footer";
import AddExpens from "./component/AddExpens";
import AddIncom from "./component/AddIncom";

function App() {
  return (
    <>
      <div className="main">
        <BrowserRouter>
          <Navebar />
          <Routes>
            <Route path="/" element={<ExpenseList />} />
            <Route path="/Add" element={<AddExpens />} />
            <Route path="/income" element={<AddIncom />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
