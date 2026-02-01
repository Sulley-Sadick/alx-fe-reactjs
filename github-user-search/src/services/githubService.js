import axios from "axios";

const fetchUserData = async function (query) {
  try {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${query}`,
    );

    return res.data;
  } catch {
    throw new Error("Looks like we cant find the user");
  }
};

export default fetchUserData;
