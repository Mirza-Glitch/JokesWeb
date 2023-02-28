import React, { useEffect, useReducer, createContext } from "react";

function readLocalStorage() {

  let savedData = localStorage.getItem("myJokes");

  if (savedData) {

    let myData = JSON.parse(savedData);

    return myData;

  }

  return [];

}

const SavedContext = createContext(null);

function reducer(state, action) {

  switch (action.type) {

    case "save": {

      let newState = [...state, action.obj];

      return newState;

    }

    case "unsave": {

      let newState = state.filter((obj) => obj.id !== action.removeId);

      return newState;

    }

  }

  throw Error("Unknown action: " + action.type);

}

let initialState = readLocalStorage();

function MyCollectionProvider({ children }) {

  const [mySavedData, dispatch] = useReducer(reducer, initialState);

  function saveData(obj) {

    dispatch({

      type: "save",

      obj: obj,

    });

  }

  function unSaveData(obj) {

    dispatch({

      type: "unsave",

      removeId: obj.id,

    });

  }

  useEffect(() => {

    localStorage.setItem("myJokes", JSON.stringify(mySavedData));

  }, [mySavedData]);

  var value = {

    mySavedData,

    saveData,

    unSaveData,

  };

  return (

    <SavedContext.Provider value={value}>{children}</SavedContext.Provider>

  );

}

export { SavedContext, MyCollectionProvider };

