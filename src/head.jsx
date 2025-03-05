import { useState } from "react";
import { LogOut, UserPlus, User, ChevronDown } from "lucide-react";

export default function Head() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white shadow-sm hover:bg-gray-100"
      >
        <User className="h-4 w-4" />
        <span>Mon compte</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
          <button className="flex w-full items-center px-4 py-2 text-left hover:bg-gray-100">
            <User className="mr-2 h-4 w-4" />
            <span>Profil</span>
          </button>
          <button className="flex w-full items-center px-4 py-2 text-left hover:bg-gray-100">
            <UserPlus className="mr-2 h-4 w-4" />
            <span>Inscription</span>
          </button>
          <div className="border-t my-1"></div>
          <button className="flex w-full items-center px-4 py-2 text-left text-red-600 hover:bg-gray-100">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Déconnexion</span>
          </button>
        </div>
      )}
    </div>
  );
}

