import React, { useState, useEffect, useContext } from "react";
import { SavedContext } from "../context/Saved";
import Saved from "./Saved";
import Save from "./Save";

function Joke({ joke }) {
  const { mySavedData, saveData, unSaveData } = useContext(SavedContext);

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setIsSaved(mySavedData.some((obj) => obj.id === joke.id));
  }, [mySavedData, joke]);

  return (
    <>
      {!isSaved ? (
        <span onClick={() => saveData(joke)}>
          <Save />
        </span>
      ) : (
        <span
          onClick={() => {
            let deleteJoke = confirm(
              "Are you sure You want to Delete this Joke ?"
            );
            if (deleteJoke) {
              unSaveData(joke);
            }
          }}
        >
          <Saved />
        </span>
      )}
      <h3 id="joke">
        <span className="quoteOpen">
          {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-quote"
              viewBox="0 0 16 16"
            >
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
            </svg>
          }
        </span>
        {joke.delivery ? (
          <>
            <div>{joke.setup}</div>
            <div id="delivery">{joke.delivery}</div>{" "}
          </>
        ) : (
          joke.setup || joke.joke
        )}
        <span className="quoteClose">
          {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-quote"
              viewBox="0 0 16 16"
            >
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
            </svg>
          }
        </span>
      </h3>
    </>
  );
}

export default Joke;
