import React from 'react';

//Function for adding score

export const addHit = currentScore => {
    return currentScore + 1;
}
//Function for adding ball count
export const addBallScore  = currentBallCount =>{
    return currentBallCount + 1;
}
// Function for Changing the Inning Number 
export const addInning = currentInning =>{
    return currentInning + 1;
}
//Function for adding a strike count
export const addStrike  = currentStrikeCount =>{
    return currentStrikeCount + 1;
}

export const addOut = currentOutCount =>{
    return currentOutCount + 1;
}

// Functional Component - Not mutating state so won't need a Class Component 
const DashBoard = ({
    homeHitScore, 
    awayHitScore,
    setHomeHitScore, 
    setAwayHitScore, 
    inning,
    setInning,
    ballCount, 
    setBallCount, 
    strikeCount, 
    setStrikeCount, 
    outCount, 
    setOutCount}) => {
  
   return (
       <div className="button-section">
         <div className="home-buttons">
           <button onClick={() => setHomeHitScore(addHit(homeHitScore))}>
               Home Score
            </button>
               <button onClick={() => setBallCount(addBallScore(ballCount))}>
               Home Ball
           </button>
           <button onClick={()=> setStrikeCount(addStrike(strikeCount))}>
                Home Strike
           </button>
           <button onClick={()=> setOutCount(addOut(outCount))}>
                Home Out
           </button>
         </div>
               <div className="Inning_Change">
                    <button onClick={()=>setInning(addInning(inning))}>New Inning</button>
               </div>
         <div className="away-buttons">
            <button onClick={() => setAwayHitScore(awayHitScore + 1)}>
               Away Score
            </button>
               <button onClick={() => setBallCount(addBallScore(ballCount))}>
                   Away Ball
               </button>
            <button onClick={()=> setStrikeCount(addStrike(strikeCount))}>
                  Away Strike
               </button>
               <button onClick={()=> setOutCount(addOut(outCount))}>
                Away Out
           </button>
         </div>
       </div>
   )


}


export default DashBoard;