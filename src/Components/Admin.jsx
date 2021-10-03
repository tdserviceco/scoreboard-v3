import React from 'react';
import Axios from 'axios';
import BackendLayout from './BackendLayout';
import RoundCaller from './RoundCall';
import SwapButton from './SwapPlace';

function Admin(props) {
  return (
    <div className="admin-panel">
      <div className="player-1-wrapper">
        <BackendLayout mode={props.mode} player="Player-1" />
      </div>
      <div className="player-2-wrapper">
        <BackendLayout mode={props.mode} player="Player-2" />
      </div>
      <RoundCaller mode={props.mode} />
      <SwapButton mode={props.mode} />
    </div>
  );
}

export default Admin;