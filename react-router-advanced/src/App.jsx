import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import "./App.css";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";

function App() {
  return (
    <Router>
      <nav>
        <Link to={"/dashboard"}>Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route index element={<p>Please select an option.</p>} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
