import { useState } from "react";

const useLoading = (initialLoading: boolean = false) => {
  const [isLoading, setIsLoading] = useState(initialLoading);

  return {
    isLoading,
    setIsLoading,
  }
}

type UserComponentProps = {
  name: string;
}

const UserComponent: React.FC<UserComponentProps> = ({ name }) => {
  const { isLoading, setIsLoading } = useLoading(false);

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <p>Hello 👋 {name}</p>
      <button onClick={() => setIsLoading(true)}>simulate loading</button>
    </div>
  );
};

export const ParentComponent = () => {
  return <UserComponent name="saul" />;
};
