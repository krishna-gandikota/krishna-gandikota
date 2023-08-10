import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosTask = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

      setData(response.data);
      console.log(data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id:any) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleUpdate = async (id:any, updatedData:any) => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, updatedData);
      fetchData();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleSubmit = async (newData:any) => {
    try {
      await axios.post('https://jsonplaceholder.typicode.com/todos', newData);
      fetchData();
    } catch (error) {
      console.error('Error adding new data:', error);
    }
  };

  return (
    <div>
      <h1>Hello</h1>
      <button className='border-2 border-solid bg-blue-600 text-white p-3' onClick={() => handleSubmit({ title: 'New Todo', completed: false })}>Submit</button>
      <ul>
        {data.map((data:any) => (
          <li key={data.id}>
            {data.title}
            <button className='border-2 border-solid bg-green-500 text-white p-2 rounded '   onClick={() => handleDelete(data.id)}>Delete</button>
            <button className='border-2 border-solid bg-slate-500 text-yellow-950 p-2 rounded '  onClick={() => handleUpdate(data.id, { ...data, completed: !data.completed })}>
              {data.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosTask;

