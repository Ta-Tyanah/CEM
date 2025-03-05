import { useState } from "react";
import { LogOut, UserPlus, User, ChevronDown } from "lucide-react";
import { Link} from "react-router-dom";

export default function Head() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="dropdown">
        <button onClick={() => setOpen(!open)} className="dropdown-button">
          <User className="icon" />
          <span>Mon compte</span>
          <ChevronDown className="icon" />
        </button>
        {open && (
          <div className="dropdown-menu">
            <button className="dropdown-item">
              <User className="icon" />
              <span>Profil</span>
            </button>

            <Link to="/inscription">
            <button className="dropdown-item">
              <UserPlus className="icon" />
              <span>Inscription</span>
            </button>
            </Link>

            <div className="dropdown-divider"></div>

            <Link to="/Login">
            <button className="dropdown-item logout">
              <LogOut className="icon" />
              <span>Déconnexion</span>
            </button>
            </Link>

          </div>
        )}
      </div>
    </header>
  );
}
