import React, { useState } from "react";

const UserInput = () => {
  const [data, setData] = useState({
    question: "",
    options: []
  });

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
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
        <div className="col m6 s12">
          <label htmlFor="options">Options: </label>
          <input
            id="options"
            name="options"
            type="tel"
            maxLength="200"
            placeholder="Enter your option here"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default UserInput;
