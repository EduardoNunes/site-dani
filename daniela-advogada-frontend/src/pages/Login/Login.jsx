import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BalancaRosaFoto from "../../assets/balanca-rosa.jpg";
import JusticaRoxoFoto from "../../assets/martelo-ouro.jpg";
import olhoAberto from "../../assets/olho-aberto.png";
import olhoFechado from "../../assets/olho-fechado.png";
import { useFontSize } from "../../context/FontSizeContext";
import { useTheme } from "../../context/ThemeContext";
import api from "../../services/api";
import "./login.css";

function Login() {
  const { theme } = useTheme();
  const { fontSizeModify } = useFontSize();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(olhoFechado);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");

    try {
      if (!email) {
        setError("O campo e-mail está vazio");
        return;
      } else if (!password) {
        setError("O campo senha está vazio");
        return;
      } else if (password.length < 8) {
        setError("A senha deve ter no mínimo 8 caracteres");
        return;
      }
      const response = await api.post("/login", {
        email: email,
        senha: password,
        /* tipoCadastro: selectedOption, */
      });

      navigate("/client");
    } catch (error) {
      console.error("Erro na solicitação:", error.message);
      setError("Ocorreu um erro ao processar a solicitação");
    }

    navigate("/client");
    setEmail("");
    setPassword("");
  }

  function handleClearForm() {
    setEmail("");
    setPassword("");
    setError("");
  }

  function handleClickShowPassword() {
    setShowPassword(showPassword === olhoAberto ? olhoFechado : olhoAberto);
  }

  return (
    <div className={`login login-${theme}`}>
      <img
        className={`background background-${theme}`}
        src={theme === "light" ? JusticaRoxoFoto : BalancaRosaFoto}
        alt={`Banner-${theme}`}
      />
      <div className="formulario">
        <form
          onSubmit={handleSubmit}
          style={{
            height: `calc(300px + ${fontSizeModify * 10}px)`,
          }}
        >
          <h2 style={{ fontSize: `calc(26px + ${fontSizeModify}px)` }}>
            Login
          </h2>
          <div
            className="chart"
            style={{ fontSize: `calc(18px + ${fontSizeModify}px)` }}
          >
            <label>E-mail:</label>
            <input
              type="email"
              value={email}
              placeholder="Digite seu email."
              style={{
                height: `calc(26px + ${fontSizeModify * 2}px)`,
                fontSize: `calc(14px + ${fontSizeModify}px)`,
              }}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Senha:</label>
            <div className="input2">
              <input
                type={showPassword === olhoAberto ? "text" : "password"}
                value={password}
                placeholder="Digite sua senha."
                style={{
                  height: `calc(26px + ${fontSizeModify * 2}px)`,
                  fontSize: `calc(14px + ${fontSizeModify}px)`,
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="olho-password">
                <img
                  src={showPassword}
                  style={{
                    width: `calc(20px + ${fontSizeModify * 2}px)`,
                  }}
                  onClick={() => handleClickShowPassword()}
                />
              </div>
            </div>
          </div>

          {error && <span>{error}</span>}
          <div>
            <button
              type="submit"
              style={{
                width: `calc(70px + ${fontSizeModify * 2}px)`,
                fontSize: `calc(16px + ${fontSizeModify}px)`,
              }}
            >
              Login
            </button>
            <button
              type="button"
              style={{
                width: `calc(70px + ${fontSizeModify * 2}px)`,
                fontSize: `calc(16px + ${fontSizeModify}px)`,
              }}
              onClick={() => handleClearForm()}
            >
              Limpar
            </button>
          </div>

          <div
            className="bottom"
            style={{
              fontSize: `calc(16px + ${fontSizeModify}px)`,
            }}
          >
            <p>Ainda não tem cadastro?</p>
            <Link to="/register">Cadastre-se</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
