import {useState} from "react";

export const ControlledInput = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input 
        type="text"
        value={value}
        placeholder="Enter your name"
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Hello, {value}!</p>
    </div>
  );
};
