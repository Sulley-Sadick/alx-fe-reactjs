import { Link, Outlet } from "react-router-dom";

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

      <Outlet />
    </div>
  );
}

export default Profile;
