import React, { useEffect } from 'react';
import RenderRoundCall from '../Components/RenderRoundCall';
import RenderPlayer1Name from '../Components/RenderPlayer1Name';
import RenderPlayer2Name from '../Components/RenderPlayer2Name';
import RenderPlayer1Country from '../Components/RenderPlayer1Country';
import RenderPlayer2Country from '../Components/RenderPlayer2Country';
import RenderPlayer1Score from '../Components/RenderPlayer1Score';
import RenderPlayer2Score from '../Components/RenderPlayer2Score';

function Home() {
  useEffect(() => {
    document.title = 'Layout'
  }, []);

  return (
    <main>
      <div className="layout">
        <div className="Player-1">
          <div className="overlay">
            <RenderPlayer1Country />
            <RenderPlayer1Name />
            <RenderPlayer1Score />
          </div>
        </div>
        <div className="Rounds">
          <div className="overlay">
            <RenderRoundCall />
          </div>
        </div>
        <div className="Player-2">
          <div className="overlay">
            <RenderPlayer2Score />
            <RenderPlayer2Name />
            <RenderPlayer2Country />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;