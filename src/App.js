import React, { useState, useEffect } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);

  // old code with axios and myjson
  // useEffect(() => {
  //   const fetchData = async () => {
  //     let data = await axios("https://api.myjson.com/bins/vhnj4");

  //     setQuestions(data["data"]["questions"]);
  //   };
  //   fetchData();
  // }, []);

  // updated implementation with jsonbin and XHR
  useEffect(() => {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        setQuestions(JSON.parse(req.responseText)["questions"]);
      }
    };

    req.open("GET", "https://api.jsonbin.io/b/5e09f7fa32536c77d6787c2d/", true);
    req.setRequestHeader(
      "secret-key",
      "$2b$10$wJ0vzO4WCWzkmrBmRHpemeUADwt74vhLkrxYyoSITR3gGRmsh074W"
    );
    req.send();
  }, []);

  return <Form title="This is dummy text" questions={questions} />;
}

export default App;
