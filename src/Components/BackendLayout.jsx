/**
 * PLEASE uppdatera country så vi får nåt tillbaka!
 */
import React, { useState, useEffect } from 'react';
import PlayersName from './PlayersName';
import PlayerCountry from './PlayerCountry';
import ScoreUpdater from './ScoreUpdater';
import Axios from 'axios';

function BackendLayout(props) {
  const [countriesData, updateCountriesData] = useState([{}])
  // const url = 'http://' + props.mode + '/api/v1/countries';
  const getCountries = async () => {
    try {
      const countries = await Axios.get('http://localhost:5100/api/v1/countries');
      updateCountriesData(countries.data.flags);

    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (countriesData !== null) getCountries()
  }, []);

  return (
    <form className={props.player.toLowerCase()}>
      <PlayersName mode={props.mode} player={props.player} />
      <ScoreUpdater mode={props.mode} player={props.player} score={0} />
      <PlayerCountry mode={props.mode} player={props.player} countriesData={countriesData} />
    </form>
  )
}

export default BackendLayout;