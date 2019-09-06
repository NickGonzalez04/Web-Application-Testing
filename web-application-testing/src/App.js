import React, {useState} from 'react';
import Display from './components/display';
import Dashboard from './components/dashboard';
import './App.css';






function App() {
  // Setting State for score board
     const [homeHitScore, setHomeHitScore] = useState(0);
     const [awayHitScore, setAwayHitScore] = useState(0);
     const [ballCount, setBallCount] = useState(0);
     const [strikeCount, setStrikeCount] = useState(0);
     const [outCount, setOutCount] = useState(0);
     const [inning, setInning] = useState(1);

  // if statement for the the inning tracker
  // Resets to zero when the inning reaches the 9th inning 
     if(inning > 9) {
        setInning(1);
     }
  // if statement for ball tracker
     if(ballCount > 3) {
       setBallCount(0);
     }
  // if statement for strike tracker
     if(strikeCount > 2){
       setStrikeCount(0);
     }

  // if statement for Outs tracker
     if(outCount > 2){
        setOutCount(0);
      }


  return (
    <div className="App">
        <h1 className="Scoreboard-Header">Home Of The Panthers</h1>
            <Display 
                homeHitScore={homeHitScore}
                awayHitScore={awayHitScore}
                ballCount={ballCount}
                strikeCount={strikeCount}
                outCount={outCount}
                inning={inning}/>
           {/* {Set prop names to pass into Dashboard.js} */}
           <Dashboard  
                ballCount={ballCount}
                setBallCount={setBallCount}
                strikeCount={strikeCount}
                setStrikeCount={setStrikeCount}
                outCount={outCount}
                setOutCount={setOutCount}
                homeHitScore={homeHitScore}
                setHomeHitScore={setHomeHitScore}
                awayHitScore={awayHitScore}
                setAwayHitScore={setAwayHitScore}
                inning={inning}
                setInning={setInning}
                
             />
    </div>
  );
}

export default App;
