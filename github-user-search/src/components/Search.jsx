import { useState } from "react";
import fetchUserData from "../services/githubService";

const SearchBar = function () {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  //   handle input reaction
  const handleSubmit = async (event) => {
    try {
      // prevent default behavior of the browser
      event.preventDefault();

      //   stop code execution when username is empty(guard clause)
      if (username === "") return;

      setStatusMessage("Loading");

      // get return data from fetchUserData functional component
      setData(await fetchUserData(username));

      // clear input field
      setUsername("");

      setStatusMessage("");
    } catch (err) {
      console.error("handleSubmit error", err);
      setStatusMessage("Looks like we cant find the user");
    }
  };

  //   css styles
  const formStyles = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={formStyles}>
        <input type="search" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username ..." style={{ padding: "0.5rem" }} />
        <button type="submit">Submit</button>
      </form>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <p className="data_paragraph">{statusMessage}</p>
        {data && (
          <>
            <p>{data.login}</p>
            <img src={data.avatar_url} alt={data.avatar_url} style={{ borderRadius: "0.5rem" }} />
            <a href={data.html_url} target="_blank">
              Github Link
            </a>
          </>
        )}
      </div>
    </>
  );
};

export default SearchBar;
