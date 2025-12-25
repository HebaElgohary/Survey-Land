import React from 'react'

interface HowItWorkCardProps{
    num:number;
    title:string;
    subtitle:string
}

export  function HowItWorkCard({num,title,subtitle}:HowItWorkCardProps) {
  return (
    <div className='bg-[#EFEFEF] bg-secondary-foreground rounded-lg flex flex-col gap-2 items-center p-3  '>
      <div className='w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center '>{num}</div>
      <p className='text-lg font-bold text-muted '>{title}</p>
      <p className='text-xs text-[#4B5563]'> {subtitle}</p>

    </div>
  )
}
