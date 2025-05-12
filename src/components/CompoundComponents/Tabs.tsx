import React, { useState } from "react";

import classes from "./CompoundComponents.module.css";

interface TabsProps {
  children: React.ReactNode;
};

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  }

  const tabElements = React.Children.toArray(children).filter(
    (child): child is React.ReactElement => React.isValidElement(child)
  );

  return (
    <div className={classes.Tabs}>
      <ul>
        {tabElements.map((child, index) => (
          <li key={index} 
          className={`${index} === activeTabIndex ? classes.active : ""}`}
          onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </li>
        ))}
      </ul>
      <p className={classes.TabContent}>
        {tabElements[activeTabIndex].props.children}
      </p>
    </div>
  );
};

export default Tabs;
