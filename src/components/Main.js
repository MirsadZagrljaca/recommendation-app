import React, { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import MsgBox from "./MsgBox";
import Results from "./Results";

export default function Main() {
  const [query, setQuery] = useState("");

  return (
    <div className="container">
      <Header />
      <Form setQuery={setQuery} />
      <MsgBox query={query} />
      <Results query={query} />
    </div>
  );
}
