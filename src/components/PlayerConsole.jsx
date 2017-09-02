import React, { Component } from "react";

class PlayerConsole extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className="player-console">
        <h2>PLAYER CONSOLE</h2>
        <form>
          <input className="player-console__input" id="t-1" />
          <input className="player-console__input" id="t-2" />
          <input className="player-console__input" id="t-3" />
          <input className="player-console__input" id="t-4" />
          <input className="player-console__input" id="t-5" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PlayerConsole;