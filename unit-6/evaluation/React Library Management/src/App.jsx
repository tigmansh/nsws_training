import "./App.css";
import React, { Routes, Route } from "react-router-dom";
// import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import SectionPage from "./Pages/SectionPage";
import BookDetailsPage from "./Pages/BookDetailsPage";
import InvalidPage from "./Pages/InvalidPage";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/section/:section" element={<SectionPage />} />
          <Route path="/bookdetailspage/:id" element={<BookDetailsPage />} />
          <Route path="/*" element={<InvalidPage />}/>
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
