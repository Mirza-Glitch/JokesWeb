import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Joke from "./components/Joke";
import Collections from "./components/Collections";

function JokeCard() {
  const [jokeState, setJokeState] = useState({});
  const navigate = useNavigate();

  const fetchJoke = () => {
    fetch(
      "https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,sexist"
    )
      .then((res) => res.json())
      .then((data) => {
        setJokeState(data);
        if (!data) {
          fetchJoke();
        }
      })
      .catch((e) => {
        console.log(e);
        let inform = confirm(
          "There was an error while fetching data\n Try Again?"
        );
        if (inform) {
          fetchJoke();
        }
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
      <button className="collectionBtn" onClick={() => navigate("/saved")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-collection"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
        </svg>
        My Collections
      </button>
      <main>
        <div className="container">
          <Joke joke={jokeState} />
        </div>
        <button className="getJokeBtn" onClick={() => fetchJoke()}>
          Another Joke
        </button>
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<JokeCard />} />
      <Route path="/saved" element={<Collections />} />
    </Routes>
  );
}

export default App;
