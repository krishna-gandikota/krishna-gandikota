import React,{useState, useEffect} from 'react'

const index = () => {
const [data, setData] = useState([]);
    const fetchData = async() => {
        try{
            const response = await fetch("https://api.postalpincode.in/pincode/110059");
            const data = await response.json();
            setData(data[0].PostOffice);
         console.log(data[0].PostOffice);
         
        }catch(error){
         console.log('error data;', error);
        }
        
    }
    useEffect(() =>{
        fetchData();
    },[])
  return (
    <div>
      <h1>Hello</h1>
     {
        data.map((item:any,idx)=> 
        (
<div key={idx}>{item.Name}</div>
        )

        )
     }

    </div>
  )
}

export default index
