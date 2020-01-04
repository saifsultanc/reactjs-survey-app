import React, { useState } from "react";
import UserInput from "./UserInput";

const CreateForm = ({ questions }) => {
  const [enabled, setEnabled] = useState(false);

  const handleEnable = () => {
    setEnabled(!enabled);
  };
  return (
    <>
      <button onClick={handleEnable}>Create Question</button>
      {enabled && <UserInput questions={questions} />}
    </>
  );
};

export default CreateForm;
