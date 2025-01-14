"use client"
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Table, { Group } from './components/Table';
import Sidepanel from './components/Sidepanel';
import assets from './assets/assets';

export default function Home() {
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  const handleGroupSelect = (group: Group) => {
    setSelectedGroup(group); // Update the selected group when clicked
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between p-2 border-b-2 border-gray-300">
          <div className="flex items-center space-x-2">
            <img src={assets.group.src} alt="Group Icon" className="w-4 h-4" />
            <span className="font-semibold text-sm">Group</span>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center bg-white p-2 rounded-md shadow-md space-x-2 border-b-2 border-gray-300">
              <img src={assets.question.src} alt="Docs Icon" className="w-4 h-4" />
              <span className="text-sm">Docs</span>
            </div>
            <div className="flex items-center bg-white p-2 rounded-md shadow-md space-x-2">
              <span className="text-sm">+91 90043 89372</span>
            </div>
            <div className="flex items-center bg-white p-2 rounded-md shadow-md space-x-2">
              <img src={assets.logs.src} alt="Notification Icon" className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="flex flex-1">
          <div className="flex-1">
            <Table onGroupSelect={handleGroupSelect} />
          </div>
          <Sidepanel selectedGroup={selectedGroup} />
        </div>
      </div>
    </div>
  );
}
