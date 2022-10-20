import React from "react";
import Fade from "@mui/material/Fade";
import { TransitionGroup } from "react-transition-group";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import "./Timer.css";
import { Grid } from "@mui/material";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      minutesRemaining: 25,
      secondsRemaining: 0,
      timerActive: false,
      intervalId: "",
      countdownType: "Session",
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleCountdown = this.handleCountdown.bind(this);
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this);
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
    this.updateSessionTimer = this.updateSessionTimer.bind(this);
    this.updateBreakTimer = this.updateBreakTimer.bind(this);
    this.countdown = this.countdown.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  handleReset() {
    this.setState(
      (prevState) => ({
        breakLength: 5,
        sessionLength: 25,
        minutesRemaining: 25,
        secondsRemaining: 0,
        timerActive: false,
        countdownType: "Session",
      }),
      this.toggleTimer
    );
    const sound = document.getElementById("beep");
    sound.pause();
    sound.currentTime = 0;
  }

  updateBreakTimer() {
    if (this.state.countdownType === "Break") {
      this.setState({
        minutesRemaining: this.state.breakLength,
        secondsRemaining: 0,
      });
    }
  }

  handleBreakDecrement() {
    if (this.state.breakLength > 1 && !this.state.timerActive) {
      this.setState(
        (prevState) => ({
          breakLength: this.state.breakLength - 1,
        }),
        this.updateBreakTimer
      );
    }
  }

  handleBreakIncrement() {
    if (this.state.breakLength < 60 && !this.state.timerActive) {
      this.setState(
        (prevState) => ({
          breakLength: this.state.breakLength + 1,
        }),
        this.updateBreakTimer
      );
    }
  }

  updateSessionTimer() {
    if (this.state.countdownType === "Session") {
      this.setState({
        minutesRemaining: this.state.sessionLength,
        secondsRemaining: 0,
      });
    }
  }

  handleSessionDecrement() {
    if (this.state.sessionLength > 1 && !this.state.timerActive) {
      this.setState(
        (prevState) => ({
          sessionLength: this.state.sessionLength - 1,
        }),
        this.updateSessionTimer
      );
    }
  }

  handleSessionIncrement() {
    if (this.state.sessionLength < 60 && !this.state.timerActive) {
      this.setState(
        (prevState) => ({
          sessionLength: this.state.sessionLength + 1,
        }),
        this.updateSessionTimer
      );
    }
  }

  countdown() {
    if (this.state.secondsRemaining > 0) {
      this.setState({
        secondsRemaining: this.state.secondsRemaining - 1,
      });
    } else if (this.state.minutesRemaining > 0) {
      this.setState({
        minutesRemaining: this.state.minutesRemaining - 1,
        secondsRemaining: 59,
      });
    } else if (this.state.countdownType === "Session") {
      this.setState({
        countdownType: "Break",
        minutesRemaining: this.state.breakLength,
        secondsRemaining: 0,
      });
      this.playSound();
    } else if (this.state.countdownType === "Break") {
      this.setState({
        countdownType: "Session",
        minutesRemaining: this.state.sessionLength,
        secondsRemaining: 0,
      });
      this.playSound();
    }
  }

  toggleTimer() {
    if (this.state.timerActive) {
      let id = setInterval(this.countdown, 1000);
      this.setState({
        intervalId: id,
      });
    } else {
      clearInterval(this.state.intervalId);
      this.setState({
        intervalId: "",
      });
    }
  }

  handleCountdown() {
    this.setState(
      (prevState) => ({
        timerActive: !this.state.timerActive,
      }),
      this.toggleTimer
    );
  }

  playSound() {
    const sound = document.getElementById("beep");
    sound.currentTime = 0;
    sound.play();
  }

  render() {
    function formatTime(value) {
      if (value < 10) {
        return "0" + value.toString();
      } else {
        return value.toString();
      }
    }
    const minutes = formatTime(this.state.minutesRemaining);
    const seconds = formatTime(this.state.secondsRemaining);
    return (
      <TransitionGroup>
        <Fade timeout={1500}>
          <div id="clock-container">
            <label id="break-label">Break Length</label>
            <div id="break-length">
              <button id="break-decrement" onClick={this.handleBreakDecrement}>
                <ArrowDownwardIcon
                  fontSize="inherit"
                  sx={{ verticalAlign: "-8%" }}
                />
              </button>
              {this.state.breakLength}
              <button id="break-increment" onClick={this.handleBreakIncrement}>
                <ArrowUpwardIcon
                  fontSize="inherit"
                  sx={{ verticalAlign: "-8%" }}
                />
              </button>
            </div>
            <label id="session-label">Session Length</label>
            <div id="session-length">
              <button
                id="session-decrement"
                onClick={this.handleSessionDecrement}
              >
                <ArrowDownwardIcon
                  fontSize="inherit"
                  sx={{ verticalAlign: "-8%" }}
                />
              </button>
              {this.state.sessionLength}
              <button
                id="session-increment"
                onClick={this.handleSessionIncrement}
              >
                <ArrowUpwardIcon
                  fontSize="inherit"
                  sx={{ verticalAlign: "-8%" }}
                />
              </button>
            </div>
            <div id="timer-container">
              <div id="timer-label">{this.state.countdownType}</div>
              <div id="time-left">
                {minutes}:{seconds}
              </div>
            </div>
            <Grid
              id="control-bar"
              container
              direction="row"
              alignItems="center"
            >
              <div id="start-stop" onClick={this.handleCountdown}>
                <PlayArrowIcon
                  fontSize="inherit"
                  sx={{ verticalAlign: "sub" }}
                />
                <PauseCircleOutlineIcon
                  fontSize="inherit"
                  sx={{ verticalAlign: "sub" }}
                />
              </div>
              <div id="reset" onClick={this.handleReset}>
                <ReplayCircleFilledIcon
                  fontSize="inherit"
                  sx={{ verticalAlign: "sub" }}
                />
              </div>
            </Grid>
            <audio
              id="beep"
              src="https://cdn.freesound.org/previews/232/232210_1015240-lq.mp3"
            />
          </div>
        </Fade>
      </TransitionGroup>
    );
  }
}

export default Timer;
