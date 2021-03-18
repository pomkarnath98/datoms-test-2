import './App.css';
import { useState } from 'react';

function App() {
  const ob = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false
  }
  const [data, setData] = useState(ob);
  const [text, setText] = useState("");

  const changeInput = (e) => {
    setText(e.target.value)
  }

  const colorMe = () => {
    const obj = {
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false
    };
      if(text == 1) obj["one"] = true;
    else if(text == 2) obj["two"] = true;
    else if(text == 3) obj["three"] = true;
    else if(text == 4) obj["four"] = true;
    else if(text == 5) obj["five"] = true;
    else if(text == 6) obj["six"] = true;
    else if(text == 7) obj["seven"] = true;
    else if(text == 8) obj["eight"] = true;
    else if(text == 9) obj["nine"] = true;

    setData(obj)
  }

  return (
    <div className="App">
      <div id="input-button">
        <div><input value={text} onChange={(e) => changeInput(e)} /></div>
        <div><button onClick={colorMe}>Color Me</button></div>
      </div>

      <div>
        <table>
          <tbody>
            <tr>
              <td style={data.one ? { backgroundColor: "red" } : { backgroundColor: "white" }}>1</td>
              <td style={data.two ? { backgroundColor: "red" } : { backgroundColor: "white" }}>2</td>
              <td style={data.three ? { backgroundColor: "red" } : { backgroundColor: "white" }}>3</td>
            </tr>
            <tr>
              <td style={data.four ? { backgroundColor: "red" } : { backgroundColor: "white" }}>4</td>
              <td style={data.five ? { backgroundColor: "red" } : { backgroundColor: "white" }}>5</td>
              <td style={data.six ? { backgroundColor: "red" } : { backgroundColor: "white" }}>6</td>
            </tr>
            <tr>
              <td style={data.seven ? { backgroundColor: "red" } : { backgroundColor: "white" }}>7</td>
              <td style={data.eight ? { backgroundColor: "red" } : { backgroundColor: "white" }}>8</td>
              <td style={data.nine ? { backgroundColor: "red" } : { backgroundColor: "white" }}>9</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
