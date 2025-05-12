import { useState, useEffect } from "react";

import { DataPresenter } from "./DataPresenter";

type DataItem = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export const DataContainer = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/data.json");
  
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (e){
        console.error(e);
        setError(e as string);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [])
  
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <DataPresenter data={data} />
    </div>
  );
};
