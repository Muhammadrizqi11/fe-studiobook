import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/StudiosPage";
import FaqPage from "./pages/FaqPage";
import SyaratPage from "./pages/SyaratPage";
import TestimonialPage from "./pages/TestimonialPage";
import StudiosPage from "./pages/StudiosPage";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/" Component={HomePage} />
        <Route path="/fotografer" Component={StudiosPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketen" Component={SyaratPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
      </Routes>

      <FooterComponent />
    </>
  );
}

export default App;
