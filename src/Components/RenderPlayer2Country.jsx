import React, { Component } from 'react';
import io from "socket.io-client";
import flagPath from '../img/SHAD.png';

class RenderPlayer2Country extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryP1: '',
      countryP2: '',
      swap: true,
      mode: props.mode
    };
  }

  componentDidMount = () => {
    const socket = io.connect(this.state.mode);

    socket.on("swap-place", (swap) => {
      this.setState({
        swap: swap
      })
    })

    socket.on("player2country", (country) => {
      this.setState({
        countryP2: country
      })
    })

    socket.on("player1country", (country) => {
      this.setState({
        countryP1: country
      })
    })
  }

  renderCountryOfPlayer = (countryP1, countryP2) => {
    const { swap } = this.state;
    if (swap) {
      if (countryP2 === '' || countryP2 === 'Player-2' || countryP2 === undefined) {
        return <img className="img-p2 xbox" src={flagPath} alt="flag" />
      }
      return (
        <img className="img-p2" src={`${countryP2}`} alt="Country flag P2" />
      )
    }
    else if (swap === false) {
      if (countryP1 === "" || countryP1 === 'Player-1' || countryP1 === undefined) {
        return <img className="img-p1 xbox swaped" src={flagPath} alt="flag" />
      }
      return (
        <img className="img-p1 swaped" src={`${countryP1}`} alt="Country flag P1" />
      )
    }
  }


  render() {
    const { countryP1, countryP2 } = this.state;
    return (
      <div className="P2-country">
        {this.renderCountryOfPlayer(countryP1, countryP2)}
      </div>
    );
  }
}

export default RenderPlayer2Country;