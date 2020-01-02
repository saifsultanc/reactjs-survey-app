import React, { useState } from "react";

const UserInput = () => {
  const [data, setData] = useState({
    question: "",
    options: []
  });

  const nums = [1, 2, 3, 4];

  const handleChange = e => {
    // setData({
    //   ...data,
    //   [e.target.name]: e.target.value
    // });

    setData({
      ...data,
      [e.target.name]: e.target.value
    });
    console.log(data);
  };

  const handleSubmit = () => {
    // setData({
    //   question:
    // })
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
            <div className="col m6 s12">
              <label htmlFor="options">Option {value} : </label>
              <input
                id={`option {value}`}
                name={index}
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
