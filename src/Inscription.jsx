
import { useState } from "react";
import "./inscription.css"
import { Link, useNavigate } from "react-router-dom";


export function Inscription() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [agence, setAgence] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [confirmMotDePasse, setConfirmMotDePasse] = useState("");
  const [motDePasseMatch, setMotDePasseMatch] = useState(true); // Pour suivre si les mots de passe correspondent
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (motDePasse !== confirmMotDePasse) {
      setMotDePasseMatch(false); // Mots de passe ne correspondent pas
      return; // Empêche l'envoi des données si les mots de passe ne correspondent pas
    }
    // Logique pour envoyer les données d'inscription à votre backend
    console.log("Données d'inscription:", {
      nom,
      prenom,
      agence,
      email,
      motDePasse,
    });
    navigate("/login");
  };

  // Vérifie si les mots de passe correspondent en temps réel
  const handleMotDePasseChange = (e) => {
    setMotDePasse(e.target.value);
    checkPasswordsMatch(e.target.value, confirmMotDePasse);
  };

  const handleConfirmMotDePasseChange = (e) => {
    setConfirmMotDePasse(e.target.value);
    checkPasswordsMatch(motDePasse, e.target.value);
  };

  const checkPasswordsMatch = (motDePasse, confirmMotDePasse) => {
    if (motDePasse !== confirmMotDePasse) {
      setMotDePasseMatch(false); // Mots de passe ne correspondent pas
    } else {
      setMotDePasseMatch(true); // Mots de passe correspondent
    }
  };

  return (
    <div className="Inscription">
      <h1 className="h1-inscri">Formulaire inscription</h1>
      <form onSubmit={handleSubmit}>
        <div className="groupe-champ">
          <label htmlFor="nom" className="etiquette">
            Nom:
          </label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="champ"
            required
          />
        </div>
        <div className="groupe-champ">
          <label htmlFor="prenom" className="etiquette">
            Prenom:
          </label>
          <input
            type="text"
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            className="champ"
            required
          />
        </div>
        <div className="groupe-champ">
          <label htmlFor="agence" className="etiquette">
            Agence numero:
          </label>
          <input
            type="text"
            id="agence"
            value={agence}
            onChange={(e) => setAgence(e.target.value)}
            className="champ"
            required
          />
        </div>
        <div className="groupe-champ">
          <label htmlFor="email" className="etiquette">
            Votre Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="champ"
            required
          />
        </div>
        <div className="groupe-champ">
          <label htmlFor="motDePasse" className="etiquette">
            Mot de Passe:
          </label>
          <input
            type="password"
            id="motDePasse"
            value={motDePasse}
            onChange={handleMotDePasseChange}
            className="champ"
            required
          />
        </div>
        <div className="groupe-champ">
          <label htmlFor="confirmMotDePasse" className="etiquette">
            Confirmation :
          </label>
          <input
            type="password"
            id="confirmMotDePasse"
            value={confirmMotDePasse}
            onChange={handleConfirmMotDePasseChange}
            className={`champ ${motDePasseMatch ? 'champ-valide' : 'champ-erreur'}`} // Applique une classe CSS en fonction de la correspondance
            required
          />
          {!motDePasseMatch && (
            <span className="alerte-erreur">Les mots de passe ne correspondent pas.</span> // Message d'alerte si les mots de passe ne correspondent pas
          )}
        </div>
        <div className="button-container">
            <button className="login-button login-button-red">Enregistrer</button>
            <Link to="/login">
              <button className="login-button login-button-white">Connexion</button>
            </Link>
        </div>
    </form>
    </div>
  );
}


