"use client";

import React from "react";

const Home: React.FC = () => {
  const showAlert = () => {
    alert("Hello Furqan how are you");
  };

  return (
    <main>
      <h1>Hello</h1>
      <h2>My Name</h2>
      <h3>Furqan</h3>
      <button id="show-alert" onClick={showAlert}>
        Show Alert
      </button>
    </main>
  );
};

export default Home;
