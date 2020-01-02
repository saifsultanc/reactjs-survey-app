import React, { useState } from "react";
import UserInput from "./UserInput";

const CreateForm = () => {
  const [enabled, setEnabled] = useState(false);

  const handleEnable = () => {
    setEnabled(!enabled);
  };
  return (
    <>
      <button onClick={handleEnable}>Create Question</button>
      {enabled && <UserInput />}
    </>
  );
};

export default CreateForm;
