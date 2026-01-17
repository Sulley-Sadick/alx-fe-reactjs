import { useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = function (props) {
  const data = useContext(UserContext);
  console.log(data);
  return (
    <div>
      <h2>{data.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
