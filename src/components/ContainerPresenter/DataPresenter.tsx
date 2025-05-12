import React from "react";

type DataItem = {
  id: number;
  name: string;
  description: string;
  image: string;
};

type DataPresenterProps = {
  data: DataItem[];
}

export const DataPresenter: React.FC<DataPresenterProps> = ({ data }) => (
  <>
    {data.map((item) => (
      <div key={item.id}>
        <img src={item.image} alt={item.name} />
        <em>{item.description}</em>
      </div>
    ))}
  </>
);
