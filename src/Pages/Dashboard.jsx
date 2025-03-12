"use client"

import { useState } from "react"
import { Outlet, NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../contexte/AuthContexte"
import "../styles/Dashboard.css"

function Dashboard() {
  const { utilisateurCourant, deconnexion } = useAuth()
  const [menuProfilOuvert, setMenuProfilOuvert] = useState(false)
  const [menuMobileOuvert, setMenuMobileOuvert] = useState(false)
  const naviguer = useNavigate()

  const basculerMenuProfil = () => {
    setMenuProfilOuvert(!menuProfilOuvert)
  }

  const basculerMenuMobile = () => {
    setMenuMobileOuvert(!menuMobileOuvert)
  }

  const gererDeconnexion = () => {
    deconnexion()
    naviguer("/connexion")
  }

  return (
    <div className="dashboard-conteneur">
      <header className="dashboard-entete">
        <div className="logo">
          <h1>GestionStock</h1>
        </div>

        <button className="bouton-menu-mobile" onClick={basculerMenuMobile}>
          <span className="icone-menu"></span>
        </button>

        <div className="profil-utilisateur">
          <div className="info-utilisateur" onClick={basculerMenuProfil}>
            <img src={utilisateurCourant.avatar || "/placeholder.svg"} alt="Avatar" className="avatar-utilisateur" />
            <span className="nom-utilisateur">{utilisateurCourant.nom}</span>
          </div>

          {menuProfilOuvert && (
            <div className="menu-profil">
              <NavLink to="/dashboard/profil" onClick={() => setMenuProfilOuvert(false)}>
                Profil
              </NavLink>
              <button onClick={gererDeconnexion}>Déconnexion</button>
            </div>
          )}
        </div>
      </header>

      <div className="dashboard-corps">
        <aside className={`dashboard-sidebar ${menuMobileOuvert ? "ouvert" : ""}`}>
          <nav className="dashboard-navigation">
            <div className="groupe-menu">
              <h3 className="titre-menu">Tableau de bord</h3>
              <NavLink
                to="/dashboard/stock"
                className={({ isActive }) => (isActive ? "lien-actif" : "")}
                onClick={() => setMenuMobileOuvert(false)}
              >
                Stock
              </NavLink>
            </div>

            <div className="groupe-menu">
              <h3 className="titre-menu">Gestion des consommables</h3>
              <NavLink
                to="/dashboard/stock"
                className={({ isActive }) => (isActive ? "lien-actif" : "")}
                onClick={() => setMenuMobileOuvert(false)}
              >
                Stock
              </NavLink>
              <NavLink
                to="/dashboard/inventaire"
                className={({ isActive }) => (isActive ? "lien-actif" : "")}
                onClick={() => setMenuMobileOuvert(false)}
              >
                Inventaire
              </NavLink>
              <NavLink
                to="/dashboard/dispatche"
                className={({ isActive }) => (isActive ? "lien-actif" : "")}
                onClick={() => setMenuMobileOuvert(false)}
              >
                Dispatche
              </NavLink>
            </div>

            <div className="groupe-menu">
              <h3 className="titre-menu">Gestion des immobiliers</h3>
              <NavLink
                to="/dashboard/immobiliers"
                className={({ isActive }) => (isActive ? "lien-actif" : "")}
                onClick={() => setMenuMobileOuvert(false)}
              >
                Immobiliers
              </NavLink>
            </div>
          </nav>
        </aside>

        <main className="dashboard-contenu">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Dashboard

