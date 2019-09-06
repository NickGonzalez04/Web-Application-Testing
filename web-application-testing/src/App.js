import React, {useState} from 'react';

import './App.css';






function App() {

  // Setting State for score board

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [ballCount, setBallCount] = useState(0);
  const [strikeCount, setStrikeCount] = useState(0);


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
