'use client'
import React, { useState } from 'react'

export default function FilterWuthName() {
    const [data,setData] = useState([
        {
            name:'amercia',
            region:'US'
        },
        {
            name:'jamaica',
            region:'JJ'
        },
        {
            name:'europe',
            region:'EU'
        },
        {
            name:'Africa',
            region:'AF'
        },
    ])

    const handleFilter = (e:React.ChangeEvent<HTMLInputElement>) => {
        const filterData = data.filter(el => el.name.toLowerCase().startsWith(e.target.value) )
        setData(filterData)
    }
  return (
    <>

    <h1>Filter With el.Name</h1>
    <input className='border-2 border-black' type="text"  onChange={handleFilter}/>
    {data.map(el => (
        <div key={el.name}>
            <h1>{el.name}</h1>
            <h1>{el.region}</h1>
        </div>
    ))}

    </>
  )
}
