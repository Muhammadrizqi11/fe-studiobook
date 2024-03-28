import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import FaqPage from "./pages/FaqPage";
import SyaratPage from "./pages/SyaratPage";
import TestimonialPage from "./pages/TestimonialPage";
import StudiosPage from "./pages/StudiosPage";
import RootLayout from "./RootLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/fotografer" element={<StudiosPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/syaratketen" element={<SyaratPage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
