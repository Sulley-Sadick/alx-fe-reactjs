import axios from "axios";

const fetchUserData = async function (username, location, minRepos) {
  if (!username && !location && !minRepos) return;

  try {
    const queryParts = [];

    if (username) queryParts.push(username);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`minRepos:${minRepos}`);

    const query = queryParts.join(" ");

    console.log(query);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${query}`,
    );

    return res.data;
  } catch {
    throw new Error("Looks like we cant find the user");
  }
};

export default fetchUserData;
