import React from 'react'

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function FeatureCard({icon,title,subtitle}:FeatureCardProps) {
  return (
    <div className='flex flex-col items-center'>
      <div className="icon my-2">{icon}</div> 
      <div className="title text-primary font-extrabold lg:text-2xl my-2 text-center
" >{title}</div>
        <div className="subtitle text-center text-[#4F4F4F]">{subtitle}</div>
    </div>
  )
}