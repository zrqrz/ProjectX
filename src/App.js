import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import UserInfoPage from "./pages/UserInfoPage";
import AIModelPage from "./pages/AIModelPage";
import UploadPage from "./pages/UploadPage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/admins" Component={AdminPage} />
          <Route path="/users" Component={UserInfoPage} />
          <Route path="/AImodels" Component={AIModelPage} />
          <Route path="/upload" Component={UploadPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/admins" Component={AdminPage} />
          <Route path="/about" Component={AboutPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
