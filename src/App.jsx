import "./App.scss";
// Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import { Home, MealDetails, Error, Category } from "./pages/index";

import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/meal/category/:name" element={<Category />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
