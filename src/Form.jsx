import React from "react";
import Question from "./Question";
import CreateForm from "./CreateForm";
import Scoreboard from "./Scoreboard";

const Form = ({ title, questions, updateQuestions }) => {
  return (
    <>
      <h1>{title}</h1>
      <Scoreboard />
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
