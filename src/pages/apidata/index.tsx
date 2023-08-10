import { useState } from "react";
import Item from "./item";


export default function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const rawResponse = await fetch(`https://fakestoreapi.com/products`);
      const finalData = await rawResponse.json();
      console.log(finalData);
      setData(finalData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <button onClick={() => fetchData()}>
        Api data
      </button>
      {
        data.map((item,id)=>(
            <Item item={item} />
        ))
      }
    </div>
  );
}
