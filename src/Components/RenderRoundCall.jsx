import React, { useEffect, useState } from 'react';
import io from "socket.io-client";

function RenderRoundCall(props) {
  const
    [round, updateRoundText] = useState('ft2'),
    socket = io.connect(props.mode);

  useEffect(() => {
    socket.on("roundCallText", ({ roundText }) => {
      if (roundText !== '') {
        updateRoundText(roundText)
      }
    })
  }, []);

  return (
    <>
      <h3>{round}</h3>
    </>
  )
}

export default RenderRoundCall;