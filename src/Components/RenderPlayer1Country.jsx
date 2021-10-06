import React, { useState, useEffect } from 'react';
import io from "socket.io-client";
function RenderPlayer1Country(props) {
  const
    [countryP1, updateCountryP1] = useState(''),
    [countryP2, updateCountryP2] = useState(''),
    [swapPlace, updateSwapPlace] = useState(true),
    [animationFlagP1, updateAnimationFlagP1] = useState(''),
    [animationFlagP2, updateAnimationFlagP2] = useState(''),
    socket = io.connect(props.mode);

  useEffect(() => {
    socket.on("swap-place", (swap) => {
      updateSwapPlace(swap)
    })

    socket.on("player1country", country => {
      if (countryP1 !== country) {
        updateAnimationFlagP1('')
        setTimeout(() => {
          updateAnimationFlagP1('animation-time-flag-P1')
        }, 250)
      }
      updateCountryP1(country)
    })

    socket.on("player2country", country => {
      if (countryP2 !== country) {
        updateAnimationFlagP2('')
        setTimeout(() => {
          updateAnimationFlagP2('animation-time-flag-P2')
        }, 250)
      }
      updateCountryP2(country)
    })
  }, []);

  const renderCountryOfPlayer = (cP1, cP2) => {
    if (swapPlace) {
      if (cP1 === '' || cP1 === 'Player-1' || cP1 === undefined) {
        return <img src={`img/flags/default-flag.png`} alt="flag" />
      }
      return (
        <img className={`img-p1 ${animationFlagP1}`} src={`img/flags/${cP1}.svg`} alt="Country flag P1" />
      )
    }
    else if (swapPlace === false) {
      if (cP2 === '' || cP2 === 'Player-2' || cP2 === undefined) {
        return <img className="swaped" src={`img/flags/default-flag.png`} alt="flag" />
      }
      return (
        <img className={`img-p2 swaped ${animationFlagP2}`} src={`img/flags/${cP2}.svg`} alt="Country flag P2" />
      )
    }
  }

  return (
    <div className="P1-country">
      {renderCountryOfPlayer(countryP1, countryP2)}
    </div>
  );
}

export default RenderPlayer1Country;