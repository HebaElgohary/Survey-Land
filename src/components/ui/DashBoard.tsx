import React, { useState } from 'react'

// Select imports
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

import Customers from '@/assets/svg/Customers.svg?react'
import Activity from '@/assets/svg/Activity.svg?react'
import Forward from '@/assets/svg/majesticons_share.svg?react'
import { Trash2, File } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Survey } from '../../lib/types'

export default function DashBoard({ surveys }: { surveys: Survey[] }) {
  const [selectIsOpen, setSelectIsOpen] = useState(false)

  return (
    <div className='w-full md:w-[85%] relative'>
      {selectIsOpen && (
        <div className='fixed inset-0 bg-black/30 z-40 transition-opacity' />
      )}

      {/* Header & Filters */}
      <div className='flex flex-col p-4 md:p-6 gap-4'>
        <h2 className='text-primary font-bold text-2xl'>Welcome Admin!</h2>

        <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 flex-wrap'>
          {/* Filters Group */}
          <div className="flex flex-col md:flex-row flex-wrap gap-3 w-full md:w-auto">
            {/* Select 1: Status */}
            <div className="flex md:flex-row items-center gap-1 sm:gap-2 text-sm sm:text-base min-w-[150px] text-[#838383]">
              <span>Status:</span>
              <Select onOpenChange={() => setSelectIsOpen(!selectIsOpen)}>
                <SelectTrigger className="w-1/2  md:w-[90px] border-none">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent className="z-50 bg-white">
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="shared">Shared</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Select 2: Owner */}
            <div className="flex md:flex-row items-center gap-1 sm:gap-2 text-sm sm:text-base min-w-[150px] text-[#838383]">
              <span>Owner:</span>
              <Select onOpenChange={() => setSelectIsOpen(!selectIsOpen)}>
                <SelectTrigger className="w-1/2  md:w-[90px] border-none">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent className="z-50 bg-white">
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="mine">Mine</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Select 3: Sort */}
            <div className="flex md:flex-row items-center gap-1 sm:gap-2 text-sm sm:text-base min-w-[150px] text-[#838383]">
              <span>Sort By:</span>
              <Select onOpenChange={() => setSelectIsOpen(!selectIsOpen)}>
                <SelectTrigger className="w-1/2  md:w-[100px] border-none">
                  <SelectValue placeholder="Recently" />
                </SelectTrigger>
                <SelectContent className="z-50 bg-white">
                  <SelectItem value="recent">Recently</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Button */}
          <Button className='text-white w-full sm:w-auto' size='sm'>
            <File className='mr-1' />
            Create survey
          </Button>
        </div>
      </div>

      {/* Table Content */}
      <div className='mt-5 overflow-x-auto px-2 md:overflow-x-hidden'>
        <div className="min-w-[500px]">
          <Table>
            <TableBody>
              {surveys.map((survey) => (
                <TableRow key={survey.id}>
                  <TableCell className="text-gray-500">
                    <h3 className="font-semibold text-lg text-primary">
                      {survey.name}
                    </h3>
                    <div>Last opened {survey.lastOpened}</div>
                  </TableCell>

                  <TableCell>
                    <div className={`${survey.status === 'Shared' ? 'bg-[#16EC2F1F]' : 'bg-[#7616EC1F]'} rounded-3xl text-center p-2 px-3`}>
                      {survey.status}
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-1 text-primary">
                      <Customers />
                      {survey.responses} Responses
                    </div>
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="flex items-center gap-1 text-primary">
                      <Activity />
                      Analyze
                    </div>
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="flex items-center gap-1">
                      <Forward />
                      <Trash2 className="text-red-700" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

