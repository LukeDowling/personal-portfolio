import React from 'react';
import './DrumMachine.css';
import Fade from "@mui/material/Fade";
import { TransitionGroup } from 'react-transition-group';


const padArray = [
  {
    padKey: 'Q',
    audioLink: 'https://cdn.freesound.org/previews/226/226486_3234069-lq.mp3',
    id: 'thom_c_079'
  },
  {
    padKey: 'W',
    audioLink: 'https://cdn.freesound.org/previews/226/226328_3234069-lq.mp3',
    id: 'thi_c_256'
  },
  {
    padKey: 'E',
    audioLink: 'https://cdn.freesound.org/previews/226/226066_3234069-lq.mp3',
    id: 'tham_c_075'
  },
  {
    padKey: 'A',
    audioLink: 'https://cdn.freesound.org/previews/225/225986_3234069-lq.mp3',
    id: 'tha_c_180'
  },
  {
    padKey: 'S',
    audioLink: 'https://cdn.freesound.org/previews/225/225774_3234069-lq.mp3',
    id: 'ta_c_134'
  },
  {
    padKey: 'D',
    audioLink: 'https://cdn.freesound.org/previews/225/225640_3234069-lq.mp3',
    id: 'num_c_098'
  },
  {
    padKey: 'Z',
    audioLink: 'https://cdn.freesound.org/previews/225/225542_3234069-lq.mp3',
    id: 'dhin_c_048'
  },
  {
    padKey: 'X',
    audioLink: 'https://cdn.freesound.org/previews/225/225487_3234069-lq.mp3',
    id: 'dheem_c_079'
  },
  {
    padKey: 'C',
    audioLink: 'https://cdn.freesound.org/previews/225/225357_3234069-lq.mp3',
    id: 'bheem_c_002'
  }
]

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyPressed: '',
      buttonClicked: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const sound = document.getElementById(this.props.padKey);
    sound.currentTime = 0;
    sound.play();
    this.props.currentDisplay(this.props.soundId);
  }
  
  render() {
    return (
      <button
        class="drum-pad"
        id={this.props.soundId}
        keyTrigger={this.props.padKey}
        onClick={this.handleClick}
        >
        {this.props.padKey}
        <audio class="clip" id={this.props.padKey} src={this.props.soundLink}></audio>
      </button>
    );
  }
}

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padDisplay: "Ready",
      padData: padArray
    };
    this.updateDisplay = this.updateDisplay.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  
  updateDisplay(displayId) {
    this.setState({
      padDisplay: displayId
    });
  }
  
  handleKeyDown(e) {
    this.state.padData.forEach((padItem) => {if (padItem.padKey === e.key.toUpperCase()) {
      const sound = document.getElementById(padItem.padKey);
      sound.currentTime = 0;
      sound.play();
      this.updateDisplay(padItem.id);
    }});
  }
  
  render() {
    let drumPad = this.state.padData.map((currentPad) => {
      return(
        <DrumPad
          padKey={currentPad.padKey}
          soundId={currentPad.id}
          soundLink={currentPad.audioLink}
          currentDisplay={this.updateDisplay}
        />
      );
    });
    return(
      <TransitionGroup>
        <Fade timeout={1500}>
          <div id="drum-machine" onKeyDown={this.handleKeyDown} tabIndex="0">
            <div id="drum-display">
              <p id="pad-display">{this.state.padDisplay}</p>
              <div id="pad-grid">
                {drumPad}
              </div>
            </div>
          </div>
        </Fade>
      </TransitionGroup>
    )}
}

export default DrumMachine;