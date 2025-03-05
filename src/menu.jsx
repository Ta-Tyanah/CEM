import { useState } from "react"
import { MdAddBusiness } from "react-icons/md"
import { AiOutlineStock } from "react-icons/ai"


 export default function Menu(){
    const [sidebarOpen] = useState(false)
    const [showConsommables, setShowConsommables] = useState(false)
 

 return(
 <div className="dashboard">
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h1>Dashboard</h1>
        <nav>
          <ul>

            <li className="sidebar-item" onClick={() => setShowConsommables(!showConsommables)}>
              <AiOutlineStock /> Gestion des Consommables
              {showConsommables && (
                <ul className="submenu">
                  <li className="submenu-item">
                    <a href="/Inventaire">Inventaire</a>
                  </li>
                  <li className="submenu-item">
                    <a href="/Dashboard">Stock</a>
                  </li>
                  <li className="submenu-item">
                    <a href="/Dispatche"  >Dispatche</a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a href="#gestion-immobiliers">
                <MdAddBusiness /> Gestion des Immobiliers
              </a>
            </li>

           
          </ul>
        </nav>
      </aside>
    </div>
);
}