import React from 'react';
import { FileText } from 'lucide-react';
import Saltoris from './images/Saltoris.jpg';

const Header: React.FC = () => {
  return (
    <header className="bg-white text-white p-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FileText size={24} />
          <h1 className="text-lg font-bold text-blue-600">API Documentation Generator</h1>
        </div>

        <div className="flex items-center justify-center w-14 h-14">
          <img 
            src={Saltoris}
            alt="Coding workspace"
            className="w-14 h-14 object-cover rounded-md shadow-sm"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
