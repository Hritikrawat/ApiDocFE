import React from 'react';
import { FileText } from 'lucide-react';
import Saltoris from './images/Saltoris.jpg';

const Header: React.FC = () => {
  return (
    <header className="bg-white px-6 py-3 shadow-sm border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left section: Logo + Title */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-md overflow-hidden border border-gray-300 shadow-sm">
            <img 
              src={Saltoris}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-xl font-semibold text-gray-800 tracking-tight">
            API Documentation Generator
          </h1>
        </div>

        {/* Optional icon or future nav */}
        {/* <div className="text-gray-500 hover:text-gray-700 cursor-pointer">
          <FileText size={20} />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
