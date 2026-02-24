import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Profile from "./components/Profile";
import "./App.css";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <nav>
        <Link to={"/profile"}>Profile</Link>
      </nav>

      <Routes>
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/profile" element={<Profile />}>
          <Route index element={<p>Please select an option.</p>} />
          <Route path="ProfileDetails" element={<ProfileDetails />} />
          <Route path="ProfileSettings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
