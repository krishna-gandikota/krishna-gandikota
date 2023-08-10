import React, { useEffect, useState } from 'react';

const Index = () => {
  const [randomUser, setRandomUser] = useState<any>([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setRandomUser(data);
      console.log(data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => { 

    fetchData();
  },[]);

  return (
    <div>
       {randomUser.map((item:any,idx:any)=>
    <div key={idx}>{item.name}</div>
    )}
  </div>
  );
};

export default Index;
