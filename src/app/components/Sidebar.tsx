import assets from '../assets/assets';
export default function Sidebar() {
  const navItems = [
    { title: 'Dashboard', icon: assets.home },
    { title: 'Chats', icon: assets.chat },
    { title: 'Groups', icon: assets.group, isSelected: true },
    { title: 'Contacts', icon: assets.contact },
    { title: 'Logs', icon: assets.logs },
    { title: 'Files', icon: assets.folder },
    { title: 'Settings', icon: assets.settings },
  ];

  return (
    <aside className="w-[18%] h-screen p-4 flex flex-col justify-between border-r-2 border-gray-300">
      <div>
        <div className="flex items-center space-x-4">
          <img src="https://lh3.googleusercontent.com/a-/ALV-UjVKvHCg985pwTTIPEu8op_5-6-5l5Lp4VBW0DLqmRrjfdtWwMwR=s100-p-k-rw-no" alt="Periskope Logo" className="w-6 h-6" />
          <div className="flex flex-col">
            <h2 className="font-bold">Periskope</h2>
            <p className="text-sm text-gray-600">priya@hashlabs.dev</p>
          </div>
          <img src={assets.unfold.src} alt="up down arrow" className="w-6 h-6" />
        </div>
        <ul className="mt-2">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center py-2 cursor-pointer text-sm ${item.isSelected ? 'bg-gray-300 rounded-lg' : ''}`}
            >
              <img src={item.icon.src} alt="icon" className="w-4 h-4 mr-3 ml-2" />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center space-x-4">
      <img src={assets.whatsapp.src} alt="whatsapp Logo" className="w-6 h-6" />
      <p className="text-sm text-gray-600">Help & Support</p>
      </div>
    </aside>

  );
}
