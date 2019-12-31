import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await axios("https://api.myjson.com/bins/vhnj4");

      setQuestions(data["data"]["questions"]);
    };
    fetchData();
  }, []);

  return <Form title="This is dummy text" questions={questions} />;
}

export default App;
