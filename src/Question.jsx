import React from "react";

const Question = ({ text, options }) => {
  return (
    <>
      <p>{text}</p>
      <form>
        {options.map(option => {
          return (
            <label key={option}>
              <input type="radio" name="group" value={option} />
              {option}
            </label>
          );
        })}
      </form>
    </>
  );
};

export default Question;
