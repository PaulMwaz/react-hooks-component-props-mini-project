import React from "react";
import danAbramovImage from "../assets/dan-abramov.jpg"; // Import the image from the assets folder

function About() {
  return (
    <aside
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        color: "white",
      }}
    >
      {/* Display the image */}
      <img
        src={danAbramovImage} // Use the imported image
        alt="Dan Abramov"
        style={{
          borderRadius: "50%",
          width: "100px",
          height: "100px",
        }}
      />

      {/* Display the text */}
      <div>
        <p>
          <span style={{ color: "white" }}>Personal blog by </span>
          <span style={{ color: "pink", textDecoration: "underline" }}>
            Dan Abramov
          </span>
        </p>
        <p>
          <span style={{ color: "white" }}>I explain with words and code.</span>
        </p>
      </div>
    </aside>
  );
}

export default About;
