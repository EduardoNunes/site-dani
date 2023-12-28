import { Link, Outlet } from "react-router-dom";
import LogoReduzidaBranco from "../../assets/logo-reduzida-branco.png";
import LogoReduzidaColor from "../../assets/logo-reduzida-color-120px.png";
import { useFontSize } from "../../context/FontSizeContext";
import { useScroll } from "../../context/ScrollContext";
import { useTheme } from "../../context/ThemeContext";
import "./header.css";

function Header() {
  const { theme } = useTheme();
  const { scroll } = useScroll();
  const { fontSizeModify } = useFontSize();

  let headerMove = "";
  let logoSmall = "";

  if (theme === "light") {
    headerMove = scroll === 0 ? "" : "header-move-light";
    logoSmall = scroll === 0 ? "" : "logo-small";
  } else {
    headerMove = scroll === 0 ? "" : "header-move-dark";
    logoSmall = scroll === 0 ? "" : "logo-small";
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

          <Link to="/login" className="link">
            <button
              className={`area-cliente area-cliente-${theme}`}
              style={{ fontSize: `calc(20px + ${fontSizeModify}px)` }}
            >
              <p>Área do cliente</p>
            </button>
          </Link>
        </div>
      </div>
      <div className="content-page">
        <Outlet />
      </div>
    </div>
  );
}

export default Header;
