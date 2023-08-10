import React from 'react'
import style from './calenderone.module.scss'
import Link from 'next/link'

const calenderData = [
  {
    title:"1"
  },
  {
    title:"2"
  },
   {
    title:"3"
  }, 
  {
    title:"4"
  }, 
  {
    title:"5"
  }, 
  {
    title:"6"
  },
   {
    title:"7"
  },
  {
    title:"8"
  },
   {
    title:"10"
  },
   {
    title:"11"
  }, 
  {
    title:"12"
  },
   {
    title:"13"
  },
   {
    title:"14"
  }, 
  {
    title:"15"
  }, 
  {
    title:"16"
  },
   {
    title:"17"
  },
   {
    title:"18"
  },
   {
    title:"19"
  },
   {
    title:"20"
  }, 
  {
    title:"21"
  }, {
    title:"22"
  }, {
    title:"23"
  }, {
    title:"24"
  }, {
    title:"25"
  }, {
    title:"26"
  }, {
    title:"27"
  }, {
    title:"28"
  }, {
    title:"29"
  }, {
    title:"30"
  },
];
const weeksData = [
  {
    day:"Sat"
  }, 
  {
    day:"Fri"
  }, 
  {
    day:"Thu"
  },
   {
    day:"Wed"
  },
   {
    day:"Tue"
  },
   {
    day:"Mon"
  },
  {
    day:"Sun"
  }
];

const index = () => {
  return (
    <div>


<div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-900">
    <h1 className="text-4xl font-bold text-center text-white">Calender</h1>
    <div className={`flex justify-end`}>
    <select className="m-[14px]" id="calendar__month">
      <option>Jan</option>
      <option>Feb</option>
      <option>Mar</option>
      <option selected>Apr</option>
      <option>May</option>
      <option>Jun</option>
      <option>Jul</option>
      <option>Aug</option>
      <option>Sep</option>
      <option>Oct</option>
      <option>Nov</option>
      <option>Dec</option>
    </select >

    <select className="m-[14px] " id="calendar__year">
      <option>2017</option>
      <option>2018</option>
      <option>2019</option>
      <option>2020</option>
      <option>2021</option>
      <option>2022</option>
      <option selected>2023</option>
      <option>2024</option>
      <option>2025</option>
    </select>
  </div>
    <div className="grid w-full max-w-xl grid-cols-7 gap-6 mx-auto mt-6">
      {weeksData?.map((data,index) => {
        return(
          <p className="flex items-center justify-center h-16 text-red-300">{data?.day}</p>
        );
      })}
    </div>
    <div className="grid w-full max-w-xl grid-cols-7 gap-6 mx-auto">
            {calenderData?.map((data, index) => {
              return (
                <div className="relative w-full h-12 cursor-pointer focus:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
                <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">{data?.title}</div>
              </div>
              );
            })}
     </div>
</div>
{/* <script>
    document.body.onmousemove = e => {
      for(const date of document.getElementsByClassName("box")) {
        const rect = date.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;

        date.style.setProperty("--mouse-x", `${x}px`);
        date.style.setProperty("--mouse-y", `${y}px`);
      };
    }
</script> */}
    </div>
  )
}

export default index
