import React from 'react'
import Overview from '@/assets/svg/Overview.svg?react'
import Add from '@/assets/svg/basil_add-outline.svg?react'
import { Button } from './button'
export default function DashboardSideBar() {
  return (

      <div className='hidden w-[20%] bg-[#F4F4F4]  md:flex flex-col gap-20 min-h-[60vh] rounded-tr-2xl'> 
    <div className="flex items-center gap-3 
                border-l-4 border-l-primary 
                m-4 p-2 text-primary font-semibold "><Overview/> <h2  style={{ fontFamily: "Sarabun, sans-serif" }}>All surveys</h2></div>
    <div>
    <Button className='flex items-center gap-2 pl-3 bg-transparent border-none text-[#969696] hover:bg-transparent text-lg ' size='lg' variant="outline"> <Add />New Folder </Button>
    <div className='text-[#969696] pl-4 text-sm'> to organize surveys</div>
    </div>

</div>

  )
}
