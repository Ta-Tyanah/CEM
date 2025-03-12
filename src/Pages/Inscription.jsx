"use client"

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../contexte/AuthContexte"
import "../styles/Inscription.css"

function Inscription() {
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [motDePasse, setMotDePasse] = useState("")
  const [confirmationMotDePasse, setConfirmationMotDePasse] = useState("")
  const [erreur, setErreur] = useState("")

  const { inscription } = useAuth()
  const naviguer = useNavigate()

  const gererSoumission = (e) => {
    e.preventDefault()

    if (motDePasse !== confirmationMotDePasse) {
      setErreur("Les mots de passe ne correspondent pas")
      return
    }

    try {
      inscription(nom, email, motDePasse)
      naviguer("/dashboard/stock")
    } catch (err) {
      setErreur("Échec d'inscription. Veuillez réessayer.")
    }
  }

  return (
    <div className="page-inscription">
      <div className="conteneur-inscription">
        <h1 className="titre-inscription">Inscription</h1>
        {erreur && <div className="message-erreur">{erreur}</div>}

        <form onSubmit={gererSoumission} className="formulaire-inscription">
          <div className="groupe-champ">
            <label htmlFor="nom">Nom complet</label>
            <input
              id="nom"
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
              className="champ-saisie"
            />
          </div>

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

          <div className="groupe-champ">
            <label htmlFor="confirmationMotDePasse">Confirmer le mot de passe</label>
            <input
              id="confirmationMotDePasse"
              type="password"
              value={confirmationMotDePasse}
              onChange={(e) => setConfirmationMotDePasse(e.target.value)}
              required
              className="champ-saisie"
            />
          </div>

          <button type="submit" className="bouton-inscription">
            S'inscrire
          </button>
        </form>

        <p className="lien-connexion">
          Déjà un compte? <Link to="/connexion">Se connecter</Link>
        </p>
      </div>
    </div>
  )
}

export default Inscription

