import React from "react";
import Question from "./Question";
import CreateForm from "./CreateForm";

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
      <CreateForm questions={questions} />
    </>
  );
};

export default Form;
