import React from 'react';

import { Header } from './features/header/Header';
import { Posts } from './features/posts/Posts';
import { Subreddits } from './features/subreddits/Subreddits';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Posts />
      <Subreddits />
    </div>
  );
}

export default App;
