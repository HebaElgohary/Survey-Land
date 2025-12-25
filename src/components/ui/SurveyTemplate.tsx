import React from 'react';

interface SurveyTemplateProps {
  icon: React.ReactNode;
  category: string;
  title: string;
  img: string;
  description: string;
  questionsNum: number;
}

export default function SurveyTemplate({
  icon,
  category,
  title,
  img,
  description,
  questionsNum,
}: SurveyTemplateProps) {
  return (
    <div className='bg-secondary-foreground p-3 rounded-lg '>
      <div className="flex gap-1 my-2  w-fit bg-[#9259d83f] p-1 rounded-xl items-center">
        <div className='' >{icon}</div>
        <div className='text-xs'>{category}</div>
      </div>
      <div>
      <img src={img} alt="template img" width={'100%'} className='object-cover h-28' />
      </div>
      <div className='flex flex-col items-start   '>
      <p className='text-lg font-bold text-muted '>{title}</p>
      <p className='text-sm py-1 pb-4 text-black'>{description}</p>
      </div>
      <div className='flex justify-between text-xs'>
        <div className='text-[#4B5563] text-xs'>{questionsNum} Questions</div>
        <div className='text-primary'> Use Template</div>


      </div>

    </div>
  );
}
