import React from 'react'
import { HowItWorkCard } from './HowItWorkCard'

export  function HowItWork() {
  return (
<div className='my-24  flex flex-col'>
    <h2 className='text-3xl font-bold'> <span className='text-primary'>How</span> it Work</h2>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:container md:flex-row my-5 '>
    <HowItWorkCard num={1} title='Build your Survey' subtitle='Choose a ready-made template or start from scratch.'/>
    <HowItWorkCard num={2} title='Sharer Survey' subtitle='Send the link to participants via email or social media..'/>
    <HowItWorkCard num={3} title='Analyze Results' subtitle='View analytics and extract reports.'/>
    </div>
    </div>
  )
}
