import React from "react";
type PropType = {
  handleClick: (itemBum: number) => void;
  number: number;
  dinamiclyNum: number;
  name: string;
};
export default function Accordion1({
  handleClick,
  number,
  dinamiclyNum,
  name,
}: PropType) {
  return (
    <>
      <h1
        className="cursor-pointer"
        onClick={() => {
          handleClick(dinamiclyNum);
        }}
      >
        {name} {dinamiclyNum}
      </h1>
      {number === dinamiclyNum && <p>Lorem ipsum dolor sit amet.</p>}
    </>
  );
}
