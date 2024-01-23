import { Link, Outlet, useNavigate } from "react-router-dom";
import LogoReduzidaBranco from "../../assets/logo-reduzida-branco.png";
import LogoReduzidaColor from "../../assets/logo-reduzida-color-120px.png";
import { useFontSize } from "../../context/FontSizeContext";
import { useScroll } from "../../context/ScrollContext";
import { useTheme } from "../../context/ThemeContext";
import { removeItem, getItem } from "../../utils/storage";
import "./header.css";
import sairBranco from "../../assets/sair-branco.png"
import sairPreto from "../../assets/sair-preto.png"

function Header() {
  const { theme } = useTheme();
  const { scroll } = useScroll();
  const { fontSizeModify } = useFontSize();
  const navigate = useNavigate();

  let headerMove = "";
  let logoSmall = "";

  if (theme === "light") {
    headerMove = scroll === 0 ? "" : "header-move-light";
    logoSmall = scroll === 0 ? "" : "logo-small";
  } else {
    headerMove = scroll === 0 ? "" : "header-move-dark";
    logoSmall = scroll === 0 ? "" : "logo-small";
  }

  function handleClickLogOut() {
    removeItem("usuario");
    removeItem("token");
    removeItem("id");
    removeItem("tipo cadastro");

    navigate("/");
  }

  return (
    <div className="container-header">
      <div className={`header header-${theme} ${headerMove}`}>
        <div className="container">
          <div className={`logo ${logoSmall}`}>
            <Link to="/home">
              <img
                src={theme === "light" ? LogoReduzidaColor : LogoReduzidaBranco}
                alt="Logo Daniela Lordello"
              />
            </Link>
          </div>

          <nav>
            <ul
              className="menu-lista"
              style={{ fontSize: `calc(17px + ${fontSizeModify}px)` }}
            >
              <li>
                <Link to="/home">Início </Link>
              </li>
              <li>
                <a href="#">Sobre Drª. Daniela</a>
              </li>
              <li>
                <a href="#">Missão visão e valores</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </nav>
          <div className="infos-client">
            <Link to="/login" className="link">
              <button
                className={`area-cliente area-cliente-${theme}`}
                style={{ fontSize: `calc(20px + ${fontSizeModify}px)` }}
              >
                <p>{getItem("id") !== null ? getItem("usuario").split(" ")[0] : "Área do cliente"}</p>
              </button>
            </Link>
            {getItem("id") !== null ? (
              <button
                className="button-2"
                title="Sair"
                onClick={() => handleClickLogOut()}
              >
                <img src={theme === "dark" ? sairBranco : sairPreto} alt="exit icon" />
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="content-page">
        <Outlet />
      </div>
    </div>
  );
}

export default Header;
