import React, { useState } from 'react';
import './App.css';

import Todo from './todo';
import Review from './review';
import Bmi from './bmi';

function App() {
  const [view, setView] = useState('TODO'); // The initial view

  let ContentView;

  switch(view) {
    case 'REVIEW':
      ContentView = Review;
      break;
    case 'Bmi':
      ContentView = Bmi;
      break;
    case 'TODO':
    default:
      ContentView = Todo;
      break;
  }

  return (
    <div>
      <button onClick={() => setView('TODO')}>Todo App</button>
      <button onClick={() => setView('REVIEW')}>Review App</button>
      <button onClick={() => setView('Bmi')}>Bmi Calculator</button>
      <div>
        <ContentView />
      </div>
    </div>
  );
}

export default App;
