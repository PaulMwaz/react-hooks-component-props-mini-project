// src/components/Article.js
import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const renderEmojis = () => {
    const cupsOrBento = minutes < 30 ? "☕️" : "🍱";
    const repeatCount = minutes < 30 ? Math.ceil(minutes / 5) : Math.ceil(minutes / 10);
    return cupsOrBento.repeat(repeatCount);
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {renderEmojis()} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
