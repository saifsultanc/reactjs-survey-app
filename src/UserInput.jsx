import React, { useState } from "react";

const UserInput = ({ handleEnable, questions, updateQuestions }) => {
  const [data, setData] = useState({
    question: "",
    options: ["", "", "", ""]
  });

  const nums = [1, 2, 3, 4];

  const handleChange = e => {
    if (e.target.name === "question") {
      setData({ ...data, question: e.target.value });
    } else {
      const { options } = data;
      options[e.target.name] = e.target.value;
      setData({ ...data, options });
    }
  };

  const handleSubmit = () => {
    // get the state data and reset the user input form
    const { question, options } = data;
    setData({
      question: "",
      options: ["", "", "", ""]
    });
    handleEnable();
    updateQuestions();

    // send the JSON request
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        console.log(req.responseText);
      }
    };

    req.open(
      "PUT",
      "https://api.jsonbin.io/b/5e09f7fa32536c77d6787c2d/",
      false
    );
    req.setRequestHeader(
      "secret-key",
      "$2b$10$wJ0vzO4WCWzkmrBmRHpemeUADwt74vhLkrxYyoSITR3gGRmsh074W"
    );
    req.setRequestHeader("Content-type", "application/json");
    req.setRequestHeader("versioning", false);

    let toSend = `{
      "questions": [`;

    for (let i = 0; i < questions.length; i++) {
      toSend += `{
          "text": "${questions[i].text}",
          "options": [
            "${questions[i].options[0]}",
            "${questions[i].options[1]}",
            "${questions[i].options[2]}",
            "${questions[i].options[3]}"
          ]
        },`;
    }

    toSend += `{
              "text": "${question}",
              "options": [
                "${options[0]}",
                "${options[1]}",
                "${options[2]}",
                "${options[3]}"
              ]
            }
          ]
        }`;
    req.send(toSend);
  };

  return (
    <>
      <div className="row">
        <div className="col m6 s12">
          <label htmlFor="question">Question : </label>
          <input
            id="question"
            name="question"
            type="tel"
            maxLength="200"
            placeholder="Enter your question here"
            onChange={handleChange}
          />
        </div>
        {nums.map((value, index) => {
          return (
            <div className="col m6 s12" key={`${index}`}>
              <label htmlFor="options">Option {value} : </label>
              <input
                id={`option ${value}`}
                name={`${index}`}
                type="tel"
                maxLength="200"
                placeholder="Enter your option here"
                onChange={handleChange}
              />
            </div>
          );
        })}
      </div>
      <div className="center">
        <button className="calculate-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default UserInput;
