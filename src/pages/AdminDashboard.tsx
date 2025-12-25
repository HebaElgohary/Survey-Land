import React from 'react';
import { AdminHeader } from '@/components/ui/AdminHeader';
import DashboardSideBar from '@/components/ui/DashboardSideBar';
import DashBoard from '@/components/ui/DashBoard';
import { Survey } from '../lib/types';

export default function AdminDashboard() {
  const surveys: Survey[] = [
    {
      id: 0,
      name: 'Survey name',
      status: 'Draft',
      lastOpened: '1 week',
      responses: 29,
    },
    {
      id: 1,
      name: 'Survey name',
      status: 'Shared',
      lastOpened: '1 week',
      responses: 29,
    },
    {
      id: 2,
      name: 'Survey name',
      status: 'Shared',
      lastOpened: '1 week',
      responses: 29,
    },
    {
      id: 3,
      name: 'Survey name',
      status: 'Draft',
      lastOpened: '1 week',
      responses: 29,
    },
    {
      id: 4,
      name: 'Survey name',
      status: 'Draft',
      lastOpened: '1 week',
      responses: 29,
    },
    {
      id: 5,
      name: 'Survey name',
      status: 'Shared',
      lastOpened: '1 week',
      responses: 29,
    },
  ];

  return (
    <div className= ''>
      {/* header */}
      <AdminHeader />
      {/*// header// */}

      <div className="flex container mt-5 gap-7 bg-white   ">
        {/* sidebar */}
        <DashboardSideBar />
        {/*  //sidebar//  */}

        {/* dashboard */}
        <DashBoard surveys={surveys} />
        {/*  //dashboard//  */}
      </div>
    </div>
  );
}