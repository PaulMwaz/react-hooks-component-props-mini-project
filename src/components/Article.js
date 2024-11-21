import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const coffeeCups = "☕️".repeat(Math.ceil(minutes / 5));
  const bentoBoxes = "🍱".repeat(Math.ceil(minutes / 10));
  const emoji = minutes < 30 ? coffeeCups : bentoBoxes;

  return (
    <article
      style={{ background: "#282c34", padding: "20px", borderRadius: "10px" }}
    >
      <h3 style={{ color: "pink" }}>{title}</h3>
      <small style={{ color: "white" }}>
        {date} • {emoji} {minutes} min read
      </small>
      <p style={{ color: "white" }}>{preview}</p>
    </article>
  );
}

export default Article;
