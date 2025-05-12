import Tab from "./Tab";
import Tabs from "./Tabs";

export const CompoundComponents = () => {
  return (
    <Tabs>
      <Tab label="Lion">
        <p>🦁</p>
      </Tab>
      <Tab label="Cat">
        <p>🐱</p>
      </Tab>
      <Tab label="Dog">
        <p>🐶</p>
      </Tab>
    </Tabs>
  );
};
