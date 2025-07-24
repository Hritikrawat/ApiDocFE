import React from 'react';
import { FileText } from 'lucide-react';
import Saltoris from './images/Saltoris.jpg';

const Header: React.FC = () => {
  return (
    <header className="bg-white text-white px-4 py-2 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FileText size={20} />
          <h1 className="text-lg font-semibold text-blue-600">API Documentation Generator</h1>
        </div>

        <div className="w-10 h-10">
          <img 
            src={Saltoris}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
