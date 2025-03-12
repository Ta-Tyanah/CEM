import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Connexion from "./Pages/Connexion"
import Inscription from "./Pages/Inscription"
import Dashboard from "./Pages/Dashboard"
import Stock from "./Pages/Stock"
import Inventaire from "./Pages/Inventaire"
import Dispatche from "./Pages/Dispatche"
import Immobiliers from "./Pages/Immobiliers"
import Profil from "./Pages/Profil"
import { AuthProvider } from "./contexte/AuthContexte"
import ProtectionRoute from "./composants/ProtectionRoute"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/connexion" />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="immobiliers" element={<Immobiliers />} />
          <Route path="stock" element={<Stock />} />
            <Route path="inventaire" element={<Inventaire />} />
            <Route path="dispatche" element={<Dispatche />} />
            
            <Route path="profil" element={<Profil />} />
          <Route
            path="/dashboard"
            element={
              <ProtectionRoute>
                <Dashboard />
              </ProtectionRoute>
            }
          >
            <Route path="stock" element={<Stock />} />
            <Route path="inventaire" element={<Inventaire />} />
            <Route path="dispatche" element={<Dispatche />} />
            
            <Route path="profil" element={<Profil />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App

