import { useState } from "react";
import { FaUnlock } from "react-icons/fa";
import { NewPassword } from "../NewPassword/NewPassword";
export const App = () => {
  const [resetPassword, setResetPassword] = useState(false);
  return (
    <main className="login_home">
      {resetPassword ? (
        <>
          <NewPassword open={resetPassword}  />
        </>
      ) : (
        <section className="login_home_assets">
          <div className="assets_container">
            <img
              src="/images/google-icon-logo-svgrepo-com 2.svg"
              alt="The Google Logo"
            />
            <input type="text" className="username" placeholder="Usuário" />
            <input
              type="password"
              className="password"
              placeholder="Senha"
              id=""
            />
            <div className="buttons">
              <button className="autentication">
                <FaUnlock className="lock_icon" />
                Autenticar
              </button>
              <button className="forgotten_password" onClick={()=>setResetPassword(true)}>
                Esqueci minha senha
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};
