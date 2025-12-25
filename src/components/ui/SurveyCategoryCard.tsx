import React from 'react'
import { MoveRight } from 'lucide-react';


interface SurveyCategoryCardProps{
    icon:React.ReactNode;
    category:string;
    num:number
}
export  function SurveyCategoryCard({icon,category,num}:SurveyCategoryCardProps) {
  return (
    <div   className='bg-[#F3F3F3] p-3  rounded-xl'>
      <div className='flex items-start gap-2 my-4'> 
      <div>{icon}</div>   
      <div className='font-semibold  text-lg'>
          {category}
        </div>
      </div >
      <div className='flex gap-3  justify-between my-4 ' >
        <div className='text-[#4B5563] text-sm'>{num} templates</div>
        <div className='flex items-center gap-1 text-primary text-xs '>show all <MoveRight size={10}/> </div>
      </div>
    </div>
  )
}
