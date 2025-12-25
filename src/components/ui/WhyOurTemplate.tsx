import React from 'react'
import {WhyOurTemplateCard} from './WhyOurTemplateCard'
import Frame1 from '@/assets/svg/Frame.svg?react'
import Frame2 from '@/assets/svg/Frame (1).svg?react'
import Frame3 from '@/assets/svg/Frame (2).svg?react'

export  function WhyOurTemplate() {
  return (
    <div className='my-20'>
      <h2 className='text-3xl font-bold  my-3'>Why Choose Our <span className='text-primary p-1'>Template</span></h2>

      <div className='container grid grid-cols-1 md:grid-cols-3 gap-3'>
        <WhyOurTemplateCard icon={<Frame1  width={20}/>} title='Professional Design' subtitle='Expertly  templates that look great on any device' />
        <WhyOurTemplateCard icon={<Frame2  width={20}/>} title='Professional Design' subtitle='Expertly  templates that look great on any device' />
        <WhyOurTemplateCard icon={<Frame3  width={20} />} title='Professional Design' subtitle='Expertly  templates that look great on any device' />
 
        </div>
    </div>
  )
}
