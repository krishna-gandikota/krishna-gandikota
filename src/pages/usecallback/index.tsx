import React, { useState, useCallback, useEffect } from 'react'
var funccount = new Set();
const Index = () => {


const [count, setCount] = useState(0)

const incrementCounter = useCallback(() => {
setCount(count + 1)
}, [count])

const decrementCounter = useCallback(() => {
setCount(count - 1)
}, [count])


funccount.add(incrementCounter);
funccount.add(decrementCounter);

useEffect(() => {
    alert(funccount.size);
  }, []);
return (
	<div>
	<h1 className='text-[30px]'>Count: {count}</h1>
	<button className='border-[1px] py-4 px-4 border-solid from-blue-500 bg-slate-600 text-white' onClick={incrementCounter}>
		Increase 
	</button>
	<button className='border-[1px] py-4 px-4 border-solid from-blue-500 bg-slate-600 text-white' onClick={decrementCounter}>
		Decrease
	</button>
	</div>
)
}


export default Index;
