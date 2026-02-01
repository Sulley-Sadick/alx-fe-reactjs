import { useState } from "react";
import fetchUserData from "../services/githubService";

const SearchBar = function () {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState(0);
  const [data, setData] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const message = function (msg) {
    setStatusMessage(msg);
  };

  //   handle input reaction
  const handleSubmit = async (event) => {
    // prevent default behavior of the browser
    event.preventDefault();

    message("Loading");
    try {
      // get return data from fetchUserData functional component
      const result = await fetchUserData(username, location, +minRepos);
      setData(result);

      console.log(result);

      data.items.length === 0
        ? message("Looks like we cant find the user")
        : message("");
    } catch {
      message("Looks like we cant find the user");
    }
    // clear input field
    setUsername("");
    setLocation("");
    setMinRepos("");
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
          onChange={(e) => setLocation(e.target.value)}
          style={{ padding: "0.5rem" }}
        />
        <input
          type="search"
          placeholder="Repositories"
          onChange={(e) => setMinRepos(e.target.value)}
          style={{ padding: "0.5rem" }}
        />

        <button type="submit" style={buttonStyles}>
          Submit
        </button>
      </form>
      <p className="data_paragraph">{statusMessage} </p>
      {data &&
        data.items.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.login}</p>
              <img
                src={item.avatar_url}
                alt={item.avatar_url}
                style={{ borderRadius: "0.5rem", width: "50%" }}
              />
              <p>{item.location}</p>
              <a
                href={item.html_url}
                target="_blank"
                style={{ display: "block" }}
              >
                Github Link
              </a>
            </div>
          );
        })}
    </>
  );
};

export default SearchBar;
