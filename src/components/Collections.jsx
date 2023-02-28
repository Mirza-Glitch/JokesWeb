import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SavedContext } from "../context/Saved";
import Joke from "./Joke";
import Empty from "./Empty";

function Collections() {
  const { mySavedData, saveData, unSaveData } = useContext(SavedContext);
  const [jokes, setJokes] = useState(mySavedData);
  const navigate = useNavigate();

  useEffect(() => {
    setJokes(mySavedData);
  }, [mySavedData]);

  return (
    <div id="saved">
      <button onClick={() => navigate("/")} className="backBtn">
        ➜
      </button>
      <div className="savedContent">
        {jokes.length ? (
          <span className="svdContainer">
            {jokes.map((joke, i) => {
              return (
                <div key={i} className="Joke">
                  <div className="container">
                    <Joke joke={joke} />
                  </div>
                </div>
              );
            })}
          </span>
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}

export default Collections;
