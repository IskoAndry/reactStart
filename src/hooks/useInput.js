import { useState } from "react";

export default function useInput(defaultValue = ''){
   const[value, useValue] = useState(defaultValue)

   return{
    value,
    onChange: (event)=>useValue(event.target.value)
   }
}