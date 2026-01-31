import axios from "axios";

const fetchUserData = async function (username) {
  try {
    const res = await axios.get(`https://api.github.com/users/${username}`);

    return res.data;
  } catch {
    throw new Error("Looks like we cant find the user");
  }
};

export default fetchUserData;
