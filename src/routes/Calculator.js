import React from "react";
import Fade from "@mui/material/Fade";
import { TransitionGroup } from "react-transition-group";
import "./Calculator.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultDisplayed: false,
      currentValue: "0",
      expression: "",
    };
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.evaluateExpression = this.evaluateExpression.bind(this);
    this.resultOperate = this.resultOperate.bind(this);
  }

  evaluateExpression() {
    const result = Function("return " + this.state.expression)();
    this.setState({
      currentValue: result.toString(),
      resultDisplayed: true,
    });
  }

  handleEquals() {
    if (!isNaN(this.state.currentValue) && !this.state.resultDisplayed) {
      this.setState(
        (prevState) => ({
          expression: prevState.expression + prevState.currentValue,
        }),
        this.evaluateExpression
      );
    }
  }

  handleDecimal(e) {
    if (!this.state.resultDisplayed) {
      if (isNaN(this.state.currentValue)) {
        this.setState({
          expression: this.state.expression + this.state.currentValue,
        });
        this.setState({
          currentValue: "0.",
        });
      } else if (!/\./.test(this.state.currentValue)) {
        this.setState({
          currentValue: this.state.currentValue + e.target.value,
        });
      }
    } else {
      this.setState({
        resultDisplayed: false,
        currentValue: "0.",
        expression: "",
      });
    }
  }

  handleNumber(e) {
    if (!this.state.resultDisplayed) {
      if (this.state.currentValue === "0") {
        this.setState({
          currentValue: e.target.value,
        });
      } else if (isNaN(this.state.currentValue)) {
        this.setState({
          expression: this.state.expression + this.state.currentValue,
        });
        this.setState({
          currentValue: e.target.value,
        });
      } else {
        this.setState({
          currentValue: this.state.currentValue + e.target.value,
        });
      }
    } else {
      this.setState({
        resultDisplayed: false,
        currentValue: e.target.value,
        expression: "",
      });
    }
  }

  resultOperate(operatorValue) {
    this.setState({
      currentValue: operatorValue,
      resultDisplayed: false,
    });
  }

  handleOperation(e) {
    if (this.state.resultDisplayed) {
      this.setState(
        (prevState) => ({
          expression: prevState.currentValue,
        }),
        () => this.resultOperate(e.target.value)
      );
    } else {
      if (!isNaN(this.state.currentValue)) {
        this.setState({
          expression: this.state.expression + this.state.currentValue,
          currentValue: e.target.value,
        });
      } else {
        if (e.target.value !== "-") {
          this.setState({
            currentValue: e.target.value,
          });
        } else if (
          this.state.currentValue.charAt(this.state.currentValue.length - 1) !==
          "-"
        ) {
          this.setState({
            currentValue: this.state.currentValue + "-",
          });
        }
      }
    }
  }

  handleClear() {
    this.setState({
      lastValue: "",
      currentValue: "0",
      expression: "",
    });
  }

  render() {
    return (
      <TransitionGroup>
        <Fade timeout={1500}>
          <div id="calculator-container">
            <div id="calculator-expression">{this.state.expression}</div>
            <div id="calculator-display">{this.state.currentValue}</div>
            <div id="calculator-button-container">
              <button
                class="calculator-button"
                id="clear"
                onClick={this.handleClear}
              >
                clear
              </button>
              <button
                class="calculator-button"
                id="divide"
                value="/"
                onClick={this.handleOperation}
              >
                /
              </button>
              <button
                class="calculator-button"
                id="multiply"
                value="*"
                onClick={this.handleOperation}
              >
                x
              </button>
              <button
                class="calculator-button"
                id="seven"
                value="7"
                onClick={this.handleNumber}
              >
                7
              </button>
              <button
                class="calculator-button"
                id="eight"
                value="8"
                onClick={this.handleNumber}
              >
                8
              </button>
              <button
                class="calculator-button"
                id="nine"
                value="9"
                onClick={this.handleNumber}
              >
                9
              </button>
              <button
                class="calculator-button"
                id="subtract"
                value="-"
                onClick={this.handleOperation}
              >
                -
              </button>
              <button
                class="calculator-button"
                id="four"
                value="4"
                onClick={this.handleNumber}
              >
                4
              </button>
              <button
                class="calculator-button"
                id="five"
                value="5"
                onClick={this.handleNumber}
              >
                5
              </button>
              <button
                class="calculator-button"
                id="six"
                value="6"
                onClick={this.handleNumber}
              >
                6
              </button>
              <button
                class="calculator-button"
                id="add"
                value="+"
                onClick={this.handleOperation}
              >
                +
              </button>
              <button
                class="calculator-button"
                id="one"
                value="1"
                onClick={this.handleNumber}
              >
                1
              </button>
              <button
                class="calculator-button"
                id="two"
                value="2"
                onClick={this.handleNumber}
              >
                2
              </button>
              <button
                class="calculator-button"
                id="three"
                value="3"
                onClick={this.handleNumber}
              >
                3
              </button>
              <button
                class="calculator-button"
                id="equals"
                onClick={this.handleEquals}
              >
                =
              </button>
              <button
                class="calculator-button"
                id="zero"
                value="0"
                onClick={this.handleNumber}
              >
                0
              </button>
              <button
                class="calculator-button"
                id="decimal"
                value="."
                onClick={this.handleDecimal}
              >
                .
              </button>
            </div>
          </div>
        </Fade>
      </TransitionGroup>
    );
  }
}

export default Calculator;
