import React from "react";
import Question from "./Question";
import CreateForm from "./CreateForm";

const Form = ({ title, questions, updateQuestions }) => {
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
      <CreateForm questions={questions} updateQuestions={updateQuestions} />
    </>
  );
};

export default Form;
