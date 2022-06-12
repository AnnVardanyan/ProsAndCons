import { useState } from "react";

export const AddInput = (props) => {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  const changeValue = (e) => setValue(e.target.value);

  const submitChanges = () => {
    if (value !== "") {
      onSubmit(value);
    }
    setValue("");
  };

  const handleKeyPress = e => {
    if(e.keyCode === 13 || e.key === 'Enter') {
      submitChanges();
    }
  }

  return (
    <input
      value={value}
      type="text"
      className="add-item"
      onChange={changeValue}
      onBlur={submitChanges}
      onKeyPress={handleKeyPress}
    />
  );
};
