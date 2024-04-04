import React, { useState } from "react";
import "./style.css";
import { inscrpimg } from "../../assets/images";
import { Link } from "react-router-dom";

function SignupForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fname || !lname || !email || !password) {
      setError("Veuillez remplir tous les champs.");
    } else {
      let data = {
        firstName: fname,
        lastName: lname,
        email: email,
        password: password,
      };
      console.log(data);
      setFname("");
      setLname("");
      setEmail("");
      setPassword("");
    }

    setError(null);
  };

  return (
    <div className="signup-form">
      <h1>Inscrivez-vous maintenant!</h1>
      <div className="container">
        <div className="main">
          <div className="content">
            <h2>Inscription</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="Prénom"
                required
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Nom"
                required
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="btn" type="submit">
                Inscrire
              </button>
            </form>
            <p className="account">
            Déjà inscrit ? <Link to="/login">Connexion</Link>
            </p>
          </div>
          <div className="form-img">
            <img src={inscrpimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
