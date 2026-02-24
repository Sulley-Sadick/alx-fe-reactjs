import { Link, Outlet, Routes, Route } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h2>Profile</h2>

      <ul>
        <li>
          <Link to="/ProfileDetails">Profile Details</Link>
        </li>
        <li>
          <Link to="/ProfileSettings">Profile Settings</Link>
        </li>
        <li>
          <Link to={`/blog/1`}>Blog Post</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default Profile;
