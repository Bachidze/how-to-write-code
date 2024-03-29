'use client'
import React, { useState } from "react";
const data = [
  {
    id: 1,
    name: "Gela",
  },
  {
    id: 2,
    name: "kaxa",
  },
  {
    id: 3,
    name: "nini",
  },
  {
    id: 4,
    name: "ani",
  },
  {
    id: 5,
    name: "mariami",
  },
];
export default function Search() {
    const [target,setTarget] = useState('')
    const filterData = data.filter(el => el.name.toLowerCase().includes(target.toLowerCase()))
  return (
    <>
      <h1 className="mt-[100px]">How To Filter With Search</h1>
      <div>
        <input type="text" placeholder="Enter Name" onChange={(e)=>setTarget(e.target.value)} />
        {filterData.length ?
        filterData.map((el) => (
          <div key={el.id} className="flex">
            <h1>{el.name}</h1>
            <h1>{el.id}</h1>
          </div>
        )):<h1>Not Found</h1>}
      </div>
    </>
  );
}
