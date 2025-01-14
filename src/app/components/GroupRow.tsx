import { FC } from 'react';
import { Group } from './Table';
import assets from '../assets/assets';

type GroupRowProps = {
  group: Group;
  onClick: () => void; // Function to handle row click
};

const GroupRow: FC<GroupRowProps> = ({ group, onClick }) => {
  const lastActive = new Date(group.last_active);
  const today = new Date();
  const diffTime = today.getTime() - lastActive.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const formattedLastActive = diffDays === 0
    ? lastActive.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
    : diffDays === 1
      ? "Yesterday"
      : lastActive.toLocaleDateString();

  return (
    <tr key={group.id} className="hover:bg-gray-100 cursor-pointer" onClick={onClick}>
      <td className="px-4 py-2">
        <input type="checkbox" className="form-checkbox" id={group.id} />
      </td>
      <td className="px-4 py-2 flex items-center">
        <div className="w-8 h-8 flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center">
          <img
            src={assets.group.src || "default-image-url"}
            alt={group.group_name}
            className="rounded-full object-cover w-4 h-4"
          />
        </div>
        <span className="ml-2 text-sm">{group.group_name}</span>
        {group.message_count ? (
          <span className="ml-2 px-1 text-white text-xs bg-green-500 rounded-full">
            {group.message_count}
          </span>
        ) : ''}
      </td>
      <td className="px-4 py-2">
        <span
          className={`px-2 py-1 rounded-full text-sm ${group.project.toLowerCase() === "#demo"
            ? "text-blue-700 bg-blue-100"
            : "text-orange-700 bg-orange-100"
            }`}
        >
          {group.project}
        </span>
      </td>
      <td className="px-4 py-2 flex items-center space-x-2">
        {group.labels?.slice(0, 2).map((label, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs rounded-full border-2"
          >
            {label.length > 4 ? `${label.slice(0, 4)}...` : label}
          </span>
        ))}
        {group.labels?.length > 2 && (
          <span className="px-2 py-1 text-xs border-2 rounded-full">
            {`+${group.labels?.length - 2}`}
          </span>
        )}
      </td>
      <td className="px-4 py-2 text-sm">{group.members}</td>
      <td className="px-4 py-2 text-sm">{formattedLastActive}</td>
    </tr>
  );
};

export default GroupRow;
