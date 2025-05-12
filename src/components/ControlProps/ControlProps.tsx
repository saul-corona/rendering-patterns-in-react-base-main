import { useState } from "react";

type ToggleProps = {
  isToggled: boolean;
  onToggle?: (value: boolean) => void;
};

export const Toggle: React.FC<ToggleProps> = ({ isToggled = false, onToggle }) => {
  const [internalToggled, setInternalToggled] = useState(isToggled); // Set a internal state

  const handleToggle = () => {
    const newValue = !internalToggled;
    setInternalToggled(newValue);
    
    if (onToggle) {
      onToggle(newValue);
    }
  };

  return (
    <button onClick={handleToggle}>
      {internalToggled ? "ON" : "OFF"}
    </button>
  )
};

export const ParentComponent = () => {
  const [toggledState, setToggledState] = useState(false);
  return (
    <div>
      <p>Toggled: {toggledState ? "ON" : "OFF"}</p>
      <Toggle isToggled={toggledState} onToggle={setToggledState} />
    </div>
  );
};
