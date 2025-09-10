import React, { useState } from "react";
import "./Footer.css";
type footerProps = {
  todoText: string;
  setTodoText: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (todoText: string) => void;
};
function Footer() {
  return (
    <footer>
      <div className="container">
        <form action="#">
          <input type="text" placeholder="Type to do" />
          <button>
            <p>+</p>
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
