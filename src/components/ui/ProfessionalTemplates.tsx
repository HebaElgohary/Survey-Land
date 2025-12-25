import React from 'react'
import {Input} from'./input'
import {Button} from'./button'
import { Search } from 'lucide-react';
import { SurveyCategoryCard } from './SurveyCategoryCard';
import  BriefcaseBusiness  from '@/assets/svg/business.svg?react'
import GraduationCap  from '@/assets/svg/gradCap.svg?react'
import  Star  from '@/assets/svg/Star.svg?react';
import Hr from '@/assets/svg/hr.svg?react'
import SurveyTemplate from './SurveyTemplate';
import business from '@/assets/png/businessTemplate.png'
import hr from '@/assets/png/hrTemplate.png'
import education from '@/assets/png/educationTemplate.png'
import business2 from '@/assets/png/businessTemplate2.jpg'
export default function ProfessionalTemplates() {
  return (
    <div className='flex flex-col gap-8 ' >
      <div className='flex flex-col  gap-3'>
      <h2 className='text-3xl font-semibold '>Professional Survey <span className='text-primary px-1'>Templates</span></h2>
      <p className='text-[#4B5563] text-xsm'>Choose from our collection of expertly designed survey templates to gather meaningful insights</p>
      </div>
      {/* input+ button container */}
      <div className='flex items-center gap-2 md:w-1/3 mx-auto w-full mb-5'>
        <Input placeholder='search templates...'></Input>
        <Button className='w-1/3 text-xs p-2 md:p-3'> <Search size={10}/> search </Button>
      </div>
      {/* // // */}
      {/* survey categories */}
      <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-3 '>
<SurveyCategoryCard icon={<BriefcaseBusiness  />} category='Business' num={42} />
<SurveyCategoryCard icon={<GraduationCap />} category='Education' num={35} />
<SurveyCategoryCard icon={<Star /> } category='Feedback' num={56} />
<SurveyCategoryCard icon={<Hr />} category='business' num={28} />

      </div>
      {/* // survey categories // */}

      {/* survey templates  */}
      <div className='grid grid-cols-1 gap-3 rounded-xl p-3 md:grid-cols-2 lg:grid-cols-4 py-0'>
      <SurveyTemplate icon={<BriefcaseBusiness width={15} />} category='Business' img={business} title='Employee Satisfaction Survey' description='Gather feedback about workplace satisfaction and employee engagement' questionsNum={25}/>
      <SurveyTemplate icon={<BriefcaseBusiness width={15}  />} category='Human resources' img={hr} title='Course Evaluation Form' description='Collect student feedback about course content and instruction' questionsNum={20}/>
      <SurveyTemplate icon={<GraduationCap width={15}  />} category='Education' img={education} title='Patient Satisfaction Survey Satisfaction Survey' description='Evaluate patient experience and healthcare service quality' questionsNum={30}/>
      <SurveyTemplate icon={<Hr width={15}  />} category='Business' img={business2} title='Employee Satisfaction Survey' description='Gather feedback about workplace satisfaction and employee engagement' questionsNum={25}/>
      
      </div>
      {/* // survey templates //  */}


<Button className='w-full md:w-1/5 mx-auto'>Learn More</Button>
    </div>
  )
}
