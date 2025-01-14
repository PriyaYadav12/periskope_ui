import { Group } from "./Table";
import assets from "../assets/assets";
import { FaCalendarAlt, FaRegUser } from 'react-icons/fa';

type SidepanelProps = {
  selectedGroup: Group | null;
};

export default function Sidepanel({ selectedGroup }: SidepanelProps) {
  if (!selectedGroup) {
    return <div className="w-80 h-full bg-gray-100 border-l p-4">Click a group to view details here.</div>;
  }

  const currentTime = new Date(selectedGroup.last_active);
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <div className="w-80 h-full bg-white border-l border-gray-200 p-4">
      {/* Group Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <img
            src={assets.group.src || '/default-icon.png'}
            alt={selectedGroup.group_name}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium">{selectedGroup.group_name}</span>
        </div>
        <div className="flex items-center space-x-1">
          <img src={assets.refresh.src} alt="Refresh" className="w-4 h-4" />
          <span className="text-sm font-medium">Refresh</span>
        </div>
      </div>


      {/* Tabs */}
      <div className="flex space-x-6 mb-4 border-b-2">
        <button className="text-sm font-medium text-green-600 border-b-2 border-green-600 pb-1">Overview</button>
        <button className="text-sm font-medium text-gray-500 hover:text-green-500 pb-1">Members</button>
        <button className="text-sm font-medium text-gray-500 hover:text-green-500 pb-1">Logs</button>
      </div>

      {/* Info Table */}
      <div className="flex flex-col space-y-5">
        <div className="flex justify-between">
          <span className="text-xs font-medium text-gray-500">Last Active</span>
          <span className="text-xs text-gray-500 ">{formattedTime}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs font-medium text-gray-500">Disappearing Messages</span>
          <span className="text-xs text-gray-500 ">Off</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs font-medium text-gray-500">Send Message Permission</span>
          <span className="text-xs text-gray-500 ">All</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs font-medium text-gray-500">Project</span>
          <span
            className={`px-2 py-1 rounded-full text-sm ${selectedGroup.project.toLowerCase() === "#demo"
              ? "text-blue-700 bg-blue-100"
              : "text-orange-700 bg-orange-100"
              }`}
          >
            {selectedGroup.project}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs font-medium text-gray-500">Labels</span>
          <div className="flex flex-col space-y-2">
            {selectedGroup.labels?.map((label, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full border-2"
              >
                {label}
              </span>
            ))}

            <div className="flex items-center">
              <span className="px-2 py-1 text-xs rounded-full border-2">+ Add New Label</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-2" />

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col space-y-3">
        <div className="px-4 py-2 text-sm flex items-center space-x-2">
          <img src={assets.export.src} alt="export" className="w-4 h-4" />
          <span>Export Chat</span>
        </div>
        <div className="px-4 py-2 text-red-500 text-sm flex items-center space-x-2">
          <img src={assets.logout.src} alt="logout" className="w-4 h-4" />
          <span>Exit Chat</span>
        </div>
      </div>
      <div className="shadow-lg p-4 rounded-lg bg-white">
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm text-gray-500">PER-011 | {selectedGroup.group_name}</span>
          <div className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full">
            H
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <FaRegUser className="text-gray-500" />
          <span className="text-sm text-gray-700">Issues with mentions on groups</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button className="flex items-center  px-1 py-1 rounded-lg text-sm text-gray-700 border border-gray-300">
            <FaRegUser className="mr-2" />
          </button>

          <div className="flex items-center  px-1 py-1 rounded-lg text-sm text-gray-700 border border-gray-300">
            <FaCalendarAlt className="mr-2" />
            Dec 22
          </div>

          <button className="flex items-center  px-1 py-1 rounded-lg text-sm text-gray-700 border border-gray-300">
            Client
          </button>
          <button className="flex items-center  px-1 py-1  text-sm text-gray-700">
            3 days
          </button>
        </div>

      </div>
    </div>
  );
}
