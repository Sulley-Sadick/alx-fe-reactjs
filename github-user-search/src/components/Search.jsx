import { useState } from "react";
import fetchUserData from "../services/githubService";

// global variable
let data;

const SearchBar = function () {
  const [username, setUsername] = useState("");

  //   handle input reaction
  const handleSubmit = async (event) => {
    try {
      // prevent default behavior of the browser
      event.preventDefault();

      //   stop code execution when username is empty
      if (username === "") return;

      // get return data from fetchUserData functional component
      data = await fetchUserData(username);

      // clear input field
      setUsername("");
    } catch (err) {
      console.error(err);
    }
  };

  //   css styles
  const styles = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
    marginBottom: "1rem",
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={styles}>
        <input type="search" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username ..." style={{ padding: "0.5rem" }} />
        <button type="submit">Submit</button>
      </form>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <p>{data && data.login}</p>
        <img src={data && data.avatar_url} alt={data && data.avatar_url} style={{ borderRadius: "0.5rem" }} />
        <a href={data && data.html_url} target="_blank">
          Github Link
        </a>
      </div>
    </>
  );
};

export default SearchBar;
