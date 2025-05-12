
function withLoading<T extends object> (Component: React.ComponentType<T>) {
  return (props: T & {isLoading: boolean}) => {
    const { isLoading, ...rest } = props;
    return isLoading ? <p>Loading...</p> : <Component {...rest as T} />;
  }
}

type UserComponentProps = {
  name: string;
}

const userComponent: React.FC<UserComponentProps> = ({ name }) => {
  return <p>Hello 👋 {name}</p>
}

const UserComponentWithLoading = withLoading(userComponent);

export const ParentComponent = () => {
  return (
    <div>
      <UserComponentWithLoading name="John" isLoading={false} />
      <UserComponentWithLoading name="Saul" isLoading={true} />
    </div>
  );
};
