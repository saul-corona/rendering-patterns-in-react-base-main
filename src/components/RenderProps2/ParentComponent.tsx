import { useState } from "react";

interface ParentComponentProps {
    render: (data: string[]) => React.ReactNode;
};

const ParentComponent: React.FC<ParentComponentProps> = ({ render }) => {
    const [data] = useState<string[]>(["Apple", "Oranje", "Banana"]);
    return (
        <ul>
            {render(data)}
        </ul>
    );
};

export default ParentComponent;
