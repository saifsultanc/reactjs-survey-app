import React, { useState } from "react";
import UserInput from "./UserInput";

const CreateForm = ({ questions, updateQuestions }) => {
  const [enabled, setEnabled] = useState(false);

  const handleEnable = () => {
    setEnabled(!enabled);
  };
  return (
    <>
      <button onClick={handleEnable}>Create Question</button>
      {enabled && (
        <UserInput
          handleEnable={handleEnable}
          questions={questions}
          updateQuestions={updateQuestions}
        />
      )}
    </>
  );
};

export default CreateForm;
