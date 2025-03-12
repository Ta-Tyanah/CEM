"use client"

import { Navigate } from "react-router-dom"
import { useAuth } from "../contexte/AuthContexte"

function ProtectionRoute({ children }) {
  const { utilisateurCourant } = useAuth()

  if (!utilisateurCourant) {
    return <Navigate to="/connexion" />
  }

  return children
}

export default ProtectionRoute

