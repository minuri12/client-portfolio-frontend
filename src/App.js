import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Work/Work";
import Info from "./Pages/Info/Info";
import Loading from "./Pages/Loading/Loading";
import Projects from "./Pages/Projects/Projects";
import Projects2 from "./Pages/Projects/Projects2";
import Projects3 from "./Pages/Projects/Projects3";
import Projects4 from "./Pages/Projects/Projects4";
import Blogs from "./Pages/Blogs/Blogs";
import BlogDetail from "./Pages/Blogs/BlogDetail";
import Scrolltotop from "./Components/Scrolltotop";
import MoreProjects from "./Pages/MoreProjects/MoreProjects";
import WhatsAppIcon from "./Assets/WhatsAppIcon.png";
import CustomCursor from "./Components/CustomCursor";
import CookieConsent from "react-cookie-consent";

function AppContent() {
  const location = useLocation();
  const isLoadingPage = location.pathname === "/";

  return (
    <div className="App">
      <CustomCursor />
      <Scrolltotop />
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects-2" element={<Projects2 />} />
        <Route path="/projects-3" element={<Projects3 />} />
        <Route path="/projects-4" element={<Projects4 />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/more-projects" element={<MoreProjects />} />
      </Routes>

      {!isLoadingPage && (
        <a
          href="https://wa.me/94713775404?text=Hi%20Minuri%2C%20I%20would%20like%20to%20chat%20about%20your%20services."
          target="_blank"
          rel="noreferrer"
          className="whatsapp-float"
          aria-label="Open WhatsApp chat"
        >
          <img src={WhatsAppIcon} alt="WhatsApp" className="whatsapp-float-icon" />
        </a>
      )}
      <CookieConsent
        location="bottom"
        buttonText="Accept All"
        declineButtonText="Decline"
        enableDeclineButton
        expires={150}
        style={{ background: "#ffffff", color: "black", bottom: "80px", zIndex: 9999 }}
        buttonStyle={{ background: "#ff0000", color: "white", borderRadius: "8px" }}
        declineButtonStyle={{ background: "transparent", border: "1px solid #ff0000", color: "white", borderRadius: "8px" }}
      >
        We use cookies to enhance your experience on minuri.me. By clicking Accept All, you agree to our use of cookies.
      </CookieConsent>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

