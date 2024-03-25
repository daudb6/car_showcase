"use client"
import { CustomButtonProps } from "@/types"


const CustomButton = ({title,containerStyles,handleClick,btnType}: CustomButtonProps  ) => {
  return (
   <button className = {`custom-btn ${containerStyles}`} onClick={handleClick} type={btnType || "button"}>
    <span>{title}</span>
   </button>
  )
}

export default CustomButton