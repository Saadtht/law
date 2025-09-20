import React, { useState } from "react";
import './style.css';
import { loginimg} from "../../assets/images";
import { Link } from "react-router-dom";

export default function Sect1() {
  const [emailVal] = useState("")
  // const remplirEmail = (e) => {
  //   setEmailVal(e.target.value)
  // }
  console.log(emailVal)
  return (
    <div className="login-form" >
      <h1>Bienvenue !</h1>
      <div className="container">
        <div className="main">
          <div className="content">
            <h2>Connexion</h2>
            <form action="" method="post">
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="mdp" placeholder="Mot de passe" required />
              <button className="btn" type="submit">
                Connecter
              </button>


            </form>
            <p className="account">Vous n'avez pas de compte ? <Link to="/inscription">Inscrivez-vous</Link></p>
          </div>
          <div className="form-img">
            <img src={loginimg} alt="" />

          </div>
        </div>
      </div>

    </div>
  )
}