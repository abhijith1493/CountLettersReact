// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    input: '',
  }

  funChange = event => {
    const a = event.target.value
    this.setState({
      input: a,
    })
  }

  render() {
    const value = this.state

    return (
      <div className="wrapper">
        <div className="innerWrapper">
          <div className="inL">
            <div className="inLL">
              <h1>Calculate the letters you entered</h1>
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                id="phraseText"
                className="input"
                type="text"
                name="input"
                placeholder="Enter the phrase"
                onChange={this.funChange}
              />
            </div>

            <p className="button">No.of letters: {value.input.length}</p>
          </div>
          <div className="inlR">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
