import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import "./App.css";

function App() {
  // const data = [
  //   {
  //     text: "Whats your name?",
  //     options: ["Option1", "Option2", "Option3"]
  //   },
  //   {
  //     text: "Whats your age?",
  //     options: ["5", "4", "100"]
  //   }
  // ];
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await axios("https://api.myjson.com/bins/vhnj4");

      setQuestions(data["questions"]);
    };
    fetchData();
  }, []);
  // return <h1>hello</h1>;
  return <Form title="This is dummy text" questions={questions} />;
}

export default App;
