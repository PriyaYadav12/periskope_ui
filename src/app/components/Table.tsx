import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import assets from '../assets/assets';
import GroupRow from './GroupRow';

export type Group = {
  id: string;
  group_name: string;
  project: string;
  labels: string[];
  members: number;
  last_active: string;
  message_count: number;
};

type TableProps = {
  onGroupSelect: (group: Group) => void; // Prop to notify when a group is clicked
};

export default function Table({ onGroupSelect }: TableProps) {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('groups').select('*').order('id', { ascending: true });
      if (error) {
        console.error('Error fetching data:', error.message);
        alert('Failed to fetch group data. Please try again.');
      } else {
        setGroups(data || []);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-between p-2 h-[2rem] bg-gray-100 border-b-2 border-gray-300">
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search" className="px-4 rounded-md border border-gray-300" />
          <select className="px-4 rounded-md border border-gray-300">
            <option>Filter</option>
          </select>
        </div>
        <div className="flex items-center space-x-4 ">
          <button className="px-4 bg-green-500 text-white rounded-md">Bulk Message</button>
          <button className="px-4 bg-white text-black rounded-md border-gray-400 flex items-center space-x-2">
            <span>Group Actions</span>
            <img src={assets.unfold.src} alt="up down arrow" className="w-2 h-2" />
          </button>
        </div>
      </div>

      <div className="overflow-auto max-h-[37rem] scrollable-table">
        <table className="table-auto w-full">
          <thead className="sticky top-0 bg-gray-200">
            <tr>
              <th className="text-sm px-2 py-2 font-medium">
                <input type="checkbox" className="form-checkbox" />
              </th>
              <th className="text-sm px-2 py-2 font-medium">Group Name</th>
              <th className="text-sm px-2 py-2 font-medium">Project</th>
              <th className="text-sm px-2 py-2 font-medium">Labels</th>
              <th className="text-sm px-2 py-2 font-medium">Members</th>
              <th className="text-sm px-2 py-2 font-medium">Last Active</th>
            </tr>
          </thead>
          <tbody>
            {groups.map(group => (
              <GroupRow key={group.id} group={group} onClick={() => onGroupSelect(group)} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
