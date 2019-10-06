import React from "react";
import "../style.css";

export default () => (
  <header className="navlist">
    <ul className="ullist">
      <li className="lilist">
        <a href="/" className="alist">
          Todo List
        </a>
      </li>
      <li className="lilist">
        <a href="#/pastlist" className="alist">
          Complete List
        </a>
      </li>
      <li className="lilist">
        <a href="#/searchlist" className="alist">
          Search List
        </a>
      </li>
    </ul>
  </header>
);
