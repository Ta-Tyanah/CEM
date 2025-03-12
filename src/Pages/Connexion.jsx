"use client"

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../contexte/AuthContexte"
import "../styles/Connexion.css"

function Connexion() {
  const [email, setEmail] = useState("")
  const [motDePasse, setMotDePasse] = useState("")
  const [erreur, setErreur] = useState("")
  const { connexion } = useAuth()
  const naviguer = useNavigate()

  const gererSoumission = (e) => {
    e.preventDefault()

    try {
      connexion(email, motDePasse)
      naviguer("/dashboard/stock")
    } catch  {
      setErreur("Échec de connexion. Veuillez vérifier vos identifiants.")
    }
  }

  return (
    <div className="page-connexion">
      <div className="conteneur-connexion">
        <h1 className="titre-connexion">Connexion</h1>
        {erreur && <div className="message-erreur">{erreur}</div>}

        <form onSubmit={gererSoumission} className="formulaire-connexion">
          <div className="groupe-champ">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="champ-saisie"
            />
          </div>

          <div className="groupe-champ">
            <label htmlFor="motDePasse">Mot de passe</label>
            <input
              id="motDePasse"
              type="password"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              required
              className="champ-saisie"
            />
          </div>

          <button type="submit" className="bouton-connexion">
            Se connecter
          </button>
        </form>

        <p className="lien-inscription">
          Pas encore de compte? <Link to="/inscription">S'inscrire</Link>
        </p>
      </div>
    </div>
  )
}

export default Connexion

