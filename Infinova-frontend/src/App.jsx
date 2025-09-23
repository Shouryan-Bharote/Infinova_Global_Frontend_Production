import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import CareersPage from "./pages/CareersPage";
import ContactUs from "./pages/ContactUs";
import Eduventures from "./Eduventures";
import Consultants from "./pages/Consultants";
import Technology from "./pages/Technology";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
import Blog from "./pages/Blog";
import ComingSoon from "./pages/comingsoon";

function App() {
  return (
    <Routes>
      {/* Pages that use global Navbar + Footer */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Route>

      {/* Standalone pages with unique Navbar/Footer */}
      <Route path="/eduventures/*" element={<Eduventures />} />

      <Route path="/consultants" element={<Consultants />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  );
}

export default App;
