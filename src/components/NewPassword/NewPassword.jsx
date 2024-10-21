export const NewPassword = (open, onClick) => {
  if (open) {
    return (
      <section className="reset_password">
        <section className="reset_password_header">
          <img
            src="/images/google-icon-logo-svgrepo-com 2.svg"
            alt="The Google Logo"
          />
        </section>
        <section className="reset_password_container">
          <div className="password-card">
            <h2>Redefinir Senha</h2>
            <input
              type="password"
              className="password_input"
              placeholder="Nova Senha"
            />
            <ul className="password_details">
              <li>
                <p>Mínimo 6 caracteres</p>
              </li>
              <li>
                <p>Mínimo uma letra [a-z ou A-Z]</p>
              </li>
              <li>
                <p>Mínimo um número [0-9]</p>
              </li>
              <li>
                <p>Mínimo um caracter especial [!@#$%ˆ&()_-+={}[]|:;?/~]</p>
              </li>
            </ul>
            <input
              type="password"
              className="password_input_again"
              placeholder="Confirme a nova senha"
            />
            <div className="password_butotns">
              <button
                className="password_autentication_button"
                onClick={onClick}
              >
                Atualizar Senha
              </button>
              <button className="password_cancel_button" onClick={onClick}>
                Cancelar
              </button>
            </div>
          </div>
        </section>
      </section>
    );
  }
  return;
};
