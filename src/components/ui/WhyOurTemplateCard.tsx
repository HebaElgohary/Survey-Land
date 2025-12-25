import React from 'react'

interface WhyOurTemplateCardProps{
  icon:React.ReactNode;
  title:string;
  subtitle:string
}

export function WhyOurTemplateCard({ icon, title, subtitle }: WhyOurTemplateCardProps): JSX.Element {
  return (
    <div className='flex flex-col  items-center gap-2 my-5'>
      <div>{icon}</div>
      <div className='text-lg font-semibold'>{title}</div>
      <div className='text-sm '>{subtitle}</div>
    </div>
  );
}
