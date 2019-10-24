import React from 'react';

// Props passed from App.js to the scoreboard display
const Display = ({
    homeHitScore, 
    awayHitScore, 
    ballCount,
    strikeCount, 
    outCount, 
    inning}) => {




    return (// Returns Scores, Inning, Ball, Strike, Out
      <div className="Score_Board">
        <div className="Scores">
           <section className="Home">
            <h1 className="home_hit">Yankees</h1>
            <div className="home_score">{homeHitScore}</div>
            </section>
            <section className="Inning">
            <h2>Inning</h2>
            <div className="Game_Inning">{inning}</div>
            </section>
            <section className="Away">
            <h1 className="away_hit">Away</h1>
            <div className="away_score">{awayHitScore}</div>
            </section>
        </div>
          <div className="at-bat-tracker">
          <section className="Ball">
             <h3>Ball</h3>
             <div className="Ball_Count">{ballCount}</div>
             </section>
             <section className="Strike">
             <h3>Strike</h3>
             <div className="Strike_Count">{strikeCount}</div>
             </section>
             <section className="Out">
             <h3>Outs</h3>
             <div className="Out_Count">{outCount}</div>
             </section>
            
        </div>
        </div>
    )




};

export default Display;