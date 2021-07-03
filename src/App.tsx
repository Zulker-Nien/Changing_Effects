import React,{useState} from "react";
import "./app.css";
const App = () => {
  const [bg,setBg] = useState("");
  const [ff,setFf] = useState("");
  const [fc,setFc] = useState("");
  
  const handleReset = () => {
    setBg("");
    setFf("");
    setFc("")
  };
  const handleBlue = () => {
    setBg("#001f51");
  };
  const handleGreen = () => {
    setBg("#002a0b");
  };
  const handleRed = () => {
    setBg("#c30000");
  };
  const handleUbuntu = () => {
    setFf("Ubuntu");
  };
  const handleRoboto = () => {
    setFf("Roboto");
  };
  const handleCourierNew = () => {
    setFf("Courier New");
  };
  const handleCyan = () => {
    setFc("#00cfc5");
  };
  const handlePurple = () => {
    setFc("#6e0086");
  };
  const handleBlack = () => {
    setFc("#000000");
  };

  return (
    <>
      <div className="mainContainer">
        <div className="changingBox" style={{backgroundColor:`${bg}`}}>
          <h1 style={{fontFamily:`${ff}`, color:`${fc}`}}>Change text and generate Code!</h1>
          <p style={{fontFamily:`${ff}`,  color:`${fc}`}}>
            By pressing the buttons below, one can change the text box color,
            font family and font color all together or one by one . For Example,
            when someone clicks cyan button, text color of this box and the
            heading should change to cyan from black. In the box below with a
            heading 'Code' should print the html/css styling for the current
            text and text box styling. It should change, when any of the
            following buttons are clicked, accordingly so that when someone
            copies the code it reproduces a similar text box like this one.
            Reset button should remove all effects.
          </p>
        </div>
        <div className="operationsContainer">
          <div className="operations">
            <div className="forbg">
              <h4>Background Color:</h4>
              <button style={{backgroundColor:"#001f51", fontWeight:900}} onClick={handleBlue}>Blue</button>
              <button style={{backgroundColor:"#002a0b", fontWeight:900}} onClick={handleGreen}>Green</button>
              <button style={{backgroundColor:"#c30000", fontWeight:900}} onClick={handleRed}>Red</button>
            </div>
            <div className="forff">
              <h4>Font Family:</h4>
              <button style={{backgroundColor:"black", fontWeight:900}} onClick={handleUbuntu}>Ubuntu</button>
              <button style={{backgroundColor:"black", fontWeight:900}} onClick={handleRoboto}>Roboto</button>
              <button style={{backgroundColor:"black", fontWeight:900}} onClick={handleCourierNew}>Courier New</button>
            </div>
            <div className="forfc">
              <h4>Font Color:</h4>
              <button style={{border:"5px solid #00cfc5", color:"black", fontWeight:900,}} onClick={handleCyan}>Cyan</button>
              <button style={{border:"5px solid #6e0086", color:"black", fontWeight:900}}onClick={handlePurple}>Purple</button>
              <button style={{border:"5px solid black", color:"black", fontWeight:900}} onClick={handleBlack}>Black</button>
            </div>
            <div className="forreset">
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
          <div className="codeContainer">
            <p>Code:</p>
            <div className="cssCodes">
              {bg && <p>background-color: {bg}; </p> }
              {ff && <p>font-family: {ff}; </p>}
              {fc && <p>color: {fc}; </p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
