import React, { useEffect } from 'react';

function NoMatch() {
  useEffect(() => {
    document.title = "Error 404"
  }, []);
  return (
    <div className="error">
      <h1><span style={color = "#FF0000"}>Error 404:</span> Page your looking for don't exist anymore</h1>
    </div>
  );
}

export default NoMatch;