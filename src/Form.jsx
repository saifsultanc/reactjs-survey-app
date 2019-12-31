import React from "react";
import Question from "./Question";

const Form = ({ title, questions }) => {
  return (
    <>
      <h1>{title}</h1>
      {questions.map(question => {
        return (
          <Question
            key={question.text}
            text={question.text}
            options={question.options}
          />
        );
      })}
    </>
  );
};

export default Form;
