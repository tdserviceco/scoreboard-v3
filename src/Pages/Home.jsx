import React, { useEffect } from 'react';
import RenderRoundCall from '../Components/RenderRoundCall';
import RenderPlayer1Name from '../Components/RenderPlayer1Name';
import RenderPlayer2Name from '../Components/RenderPlayer2Name';
import RenderPlayer1Country from '../Components/RenderPlayer1Country';
import RenderPlayer2Country from '../Components/RenderPlayer2Country';
import RenderPlayer1Score from '../Components/RenderPlayer1Score';
import RenderPlayer2Score from '../Components/RenderPlayer2Score';

function Home(props) {
  useEffect(() => {
    document.title = 'Layout'
  }, []);

  return (
    <main>
      <div className="layout">
        <div className="Player-1">
          <div className="overlay">
            <RenderPlayer1Country mode={props.mode} />
            <RenderPlayer1Name mode={props.mode} />
            <RenderPlayer1Score mode={props.mode} />
          </div>
        </div>
        <div className="Rounds">
          <div className="overlay">
            <RenderRoundCall mode={props.mode} />
          </div>
        </div>
        <div className="Player-2">
          <div className="overlay">
            <RenderPlayer2Score mode={props.mode} />
            <RenderPlayer2Name mode={props.mode} />
            <RenderPlayer2Country mode={props.mode} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;