import { Link, Outlet, Route, Routes } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <div>
      <h2>Profile</h2>

      <ul>
        <li>
          <Link to="/details">Profile Details</Link>
        </li>
        <li>
          <Link to="/settings">Profile Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
