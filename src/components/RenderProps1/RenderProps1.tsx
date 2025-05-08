type ChildComponentProps = {
  render: (name: string) => React.ReactNode;
};

export const ChildComponent: React.FC<ChildComponentProps> = ({ render }) => {
  const name = "John";
  return (
    <div>
      {render(name)}
    </div>
  );
};


export const ParentComponent = () => {
  return (
    <ChildComponent render={(name) => <h1>Hello {name}</h1>} />
  );
};
