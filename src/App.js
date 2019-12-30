import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const data = [
    {
      text: "Whats your name?",
      options: ["Option1", "Option2", "Option3"]
    },
    {
      text: "Whats your age?",
      options: ["5", "4", "100"]
    }
  ];
  const [questions, setQuestions] = useState(data);
  return <Form title="This is dummy text" questions={questions} />;
}

export default App;
