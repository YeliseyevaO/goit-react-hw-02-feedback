import React from "react";

export default function Sections({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
}
