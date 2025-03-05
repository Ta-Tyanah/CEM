import { Dashboard } from "./Dashboard";
import { Inscription } from "./Inscription";
import { Login } from "./Login";
import { Navigate } from "react-router-dom";  // Import de Navigate pour la redirection
import { Dispatche } from "./Dispatche";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/inscription" element={<Inscription />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/dispatche" element={<Dispatche />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
