import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [input, setInput] = React.useState('');
  const calcBtns = [];
  [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."].forEach((item) => {
    calcBtns.push(
      <Button variant="light"
        onClick={(e) => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}>{" "}{item}
      </Button>
    );
  });

  return (
    <div class="calculator card">
      <input type="text" class="calculator-screen z-depth-1" value={input} disabled />
      <div class="calculator-keys">

        {/* add button */}
        <Button variant="outline-success" onClick={(e) => setInput(input + e.target.value)} value="+">
          +
        </Button>

        {/* minus btn */}
        <Button variant="outline-success" onClick={(e) => setInput(input + e.target.value)} value="-">
          -
        </Button>

        {/* *-btn */}
        <Button variant="outline-success" onClick={(e) => setInput(input + e.target.value)} value="*">
          *
        </Button>

        {/* /-btn */}
        <Button variant="outline-success" onClick={(e) => setInput(input + e.target.value)} value="/">
          /
        </Button>
        {calcBtns}

        {/* clear all */}
        <Button variant="outline-danger"
          onClick={() => setInput("")} value="">
          AC
        </Button>

        {/* "=" btn */}
        <Button variant="outline-dark" className="equal-sign"
          onClick={(e) => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </Button>
      </div>
    </div>
  );
}

export default App;
