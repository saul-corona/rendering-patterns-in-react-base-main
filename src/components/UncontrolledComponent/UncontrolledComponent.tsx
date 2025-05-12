import { useRef } from "react";

export const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if(inputRef.current) {
    alert(`Product name: ${inputRef.current.value}`);
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Product name"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};
