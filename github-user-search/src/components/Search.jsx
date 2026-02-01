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

      setStatusMessage("");
    } catch {
      setStatusMessage("Looks like we cant find the user");
    }

    // clear input field
    setUsername("");
  };

  //   css styles
  const formStyles = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
  };

  const buttonStyles = {
    backgroundColor: "#6400ed",
    border: "none",
    padding: "0.5rem",
    color: "white",
    borderRadius: "0.3rem",
    width: "11.5rem",
    cursor: "pointer",
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={formStyles}>
        <input
          type="search"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username ..."
          style={{ padding: "0.5rem" }}
        />
        <input
          type="search"
          placeholder="Location..."
          style={{ padding: "0.5rem" }}
        />
        <input
          type="search"
          placeholder="Repositories"
          style={{ padding: "0.5rem" }}
        />

        <button type="submit" style={buttonStyles}>
          Submit
        </button>
      </form>
      <div>
        <p className="data_paragraph">{statusMessage} </p>
        {data && (
          <>
            <p>{data.login}</p>
            <img
              src={data.avatar_url}
              alt={data.avatar_url}
              style={{ borderRadius: "0.5rem" }}
            />
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
