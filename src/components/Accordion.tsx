"use client";

import { useState } from "react";
import Accordion1 from "./Accordion1";

export default function Accordion() {
    const [number,setNumber] = useState(0)
    const handleClick = (itemNum:number) => {
        if(number === itemNum){
            setNumber(0)
        }else{
            setNumber(itemNum)
        }
    }
  return (
    <>
      <h1>Accordion</h1>
      <Accordion1 
      handleClick={handleClick}
      number={number}
      dinamiclyNum={1}
      name="pirveli"
      />
      <Accordion1 
      handleClick={handleClick}
      number={number}
      dinamiclyNum={2}
      name="meore"
      />
      <Accordion1 
      handleClick={handleClick}
      number={number}
      dinamiclyNum={3}
      name="mesame"
      />
      <Accordion1 
      handleClick={handleClick}
      number={number}
      dinamiclyNum={4}
      name="meotxe"
      />
      <Accordion1 
      handleClick={handleClick}
      number={number}
      dinamiclyNum={5}
      name="mexute"
      />
    </>
  );
}
