import { useState, useEffect, useCallback } from "react";

import {
  RenderProps1,
  RenderProps2,
  ControlProps,
  CompoundComponents,
  HighOrderComponent,
  CustomHooks,
  ContainerPresenter,
  ControlledComponent,
  UncontrolledComponent,
} from "./components";

function App() {
  const [sections, setSections] = useState([
    {
      title: "Render Props",
      description: "A render prop is a prop on a component, which value is a function that returns a JSX element. The component itself does not render anything besides the render prop. Instead, the component simply calls the render prop, instead of implementing its own rendering logic.",
      component: [<RenderProps1 key="1"/>, <RenderProps2 key="2"/>],
      active: false,
    },
    {
      title: "Control Props",
      description: "Control Props is a pattern that consists of passing a prop to a component that allows it to control its internal state.",
      component: <ControlProps key="3"/>,
      active: false,
    },
    {
      title: "Compound Components",
      description: "Compound Components is a pattern that consists of creating components that work together to create a more complex functionality.",
      component: <CompoundComponents key="4"/>,
      active: false,
    },
    {
      title: "Higher Order Components",
      description: "Higher Order Components is a pattern that consists of creating a component that receives a component and returns a new component.",
      component: <HighOrderComponent key="5"/>,
      active: false,
    },
    {
      title: "Custom Hook",
      description: "Custom Hook is a pattern that consists of creating a function that returns a custom hook.",
      component: <CustomHooks key="6"/>,
      active: false,
    },
    {
      title: "Container-Present",
      description: "Container-Present is a pattern that consists of separating the business logic from the presentation.",
      component: <ContainerPresenter key="7"/>,
      active: false,
    },
    {
      title: "Controlled Components",
      description: "Controlled Components is a pattern that consists of passing a prop to a component that allows it to control its internal state.",
      component: <ControlledComponent key="8"/>,
      active: false,
    },
    {
      title: "Uncontrolled Components",
      description: "Uncontrolled Components is a pattern that consists of not passing a prop to a component that allows it to control its internal state.",
      component: <UncontrolledComponent key="9"/>,
      active: false,
    },
  ]);

  const [currentSection, setCurrentSection] = useState(0);

  const activateNextSection = useCallback(() => {
    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
    }
  }, [currentSection, sections.length]);

  useEffect(() => {
    setSections((prevSections) =>
      prevSections.map((section, index) => ({
        ...section,
        active: index <= currentSection,
      }))
    );
  }, [currentSection]);

  useEffect(() => {
    setCurrentSection(0);
  }, []);

  return (
    <>
      <header>
        <h1>⚛️ Render Patter and Composition Patter in React</h1>
        <button onClick={activateNextSection}>Show next pattern</button>
      </header>
      <section className="Patterns">
        {sections.length === 0 ? (
          <p>No sections available.</p>
        ) : (
          sections.map((section, index) =>
            section.active ? (
              <section key={index}>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                {section.component}
              </section>
            ) : null
          )
        )}
      </section>
      <footer>
        <p>
        </p>
      </footer>
    </>
  );
}

export default App;
