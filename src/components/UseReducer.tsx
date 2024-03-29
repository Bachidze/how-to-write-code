"use client";
import { error } from "console";
import React, { useReducer, useState } from "react";

const initialValue = {
    name: "gela",
    age: 22,
    post: [{ title: "test" }, {}, {}],
    address: {
      work: {
        build: "17",
        street: "chavchavadze",
      },
      home: {
        build: "13",
        street: "tsereteli",
      },
    },
    cars: [
      {
        name: "BMW",
        price: 5000,
      },
      {
        name: "Toyta",
        price: 4000,
      },
    ],
}

type StateType = typeof initialValue
type Action = {
    type:string,
    payload:string
}

const reducer = (state:StateType,action:Action) => {
    const newUser = {...state}

    switch(action.type){
        case "UPDATE_WORK_STREET":
            newUser.address.work.street = action.payload
            return newUser
            
            case "UPDATE_NAME":
                newUser.name = action.payload
                return newUser
                
                default:
                    throw new Error ('error')
    }
}

export default function UseReducer() {
    const [state,dispatch] = useReducer(reducer,initialValue)
  return (
    <>
      <h1 className="mt-[120px]">Use Reducer</h1>
      <div>
        <h1>{state.address.work.street}</h1>
        <button
          className="border-2 border-black"
          onClick={() => {
            dispatch({
              type: "UPDATE_WORK_STREET",
              payload:'Telavi'
            })
          }}
        >
          Change Home Street Name
        </button>
      </div>
    </>
  );
}
