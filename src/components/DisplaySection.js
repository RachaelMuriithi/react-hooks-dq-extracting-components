import React from "react";

function Display({ messages }) {
  const messageList = messages.map((message) => (
    <li key={message.id} className={`message ${message.type}`}>
      <div className="icon">{message.name.charAt(0)}</div>
      <span className="content">{message.content}</span>
    </li>
  ));
  return (
    <section className="messages">
      <ul>{messageList}</ul>
    </section>
  );
}
export default Display;
