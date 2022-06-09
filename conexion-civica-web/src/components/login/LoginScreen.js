import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { startLoginEmailPassword, startGoogleLogin } from "../../actions/auth";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [values, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleLoading = (state) => {
    setLoading(state);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(startLoginEmailPassword(email, password, handleLoading));
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogin(handleLoading));
  };

  return (
    <>

      <h3 className="auth__title">Iniciar Sesión</h3>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          Iniciar Sesión
        </button>

        <div className="auth__social-networks">
          <p>Iniciar Sesión con redes sociales</p>

          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Iniciar con google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/register" className="link">
          Crear nueva cuenta
        </Link>
        <br></br>
        <Link to="/auth/register" className="link">
          Olvido su Contraseña?
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;
