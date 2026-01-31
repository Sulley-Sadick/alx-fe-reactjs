import axios from "axios";

const fetchUserData = async function (username) {
  try {
    const res = await axios.get(`https://api.github.com/users/${username}`);

    return res.data;
  } catch (err) {
    throw new Error("Looks like user not found", `cause ${err}`);
  }
};

export default fetchUserData;
