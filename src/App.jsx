import React from "react";

function App() {
  const date = new Date().getHours();
  let greeting = "";
  let design = {};

  if (date > 0 && date <= 11) {
    greeting = "Good Morning";
    design = {
      color: "green"
    };
  } else if (date > 11 && date <= 19) {
    greeting = "Good Afternoon";
    design = {
      color: "orange"
    };
  } else if (date > 19) {
    greeting = "Good Night";
    design = {
      color: "black"
    };
  }

  return (
    <>
      <div>
        <h1 style={{ color: "#ff9c8e" }}>
          Hello Nona, <span style={design}>{greeting}</span>
        </h1>
      </div>
    </>
  );
}

export default App;
