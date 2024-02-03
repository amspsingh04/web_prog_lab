import { useState } from "react";

import "./App.css";
const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please",
  "Don't do this to me",
  "I'm gonna cry...",
  "You're breaking my heart ;(",
];
function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  function handleNoClick() {
    setNoCount(noCount + 1);
  }
  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }
  return (
    <div className="valentine">
      {yesPressed ? (
        <>
          <img src="https://tenor.com/bPkal.gif" />
          <div className="text">YAY!!!!!!!!</div>
        </>
      ) : (
        <>
          <img src="https://gifdb.com/gif/cute-love-bear-roses-ou7zho5oosxnpo6k.html" />
          <div>Will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button className="noButton" onClick={handleNoClick}>
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
