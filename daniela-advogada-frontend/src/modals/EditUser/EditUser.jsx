import "./edit-user.css";
import XPreto from "../../assets/x-preto.png";
import XBranco from "../../assets/x-branco.png";
import { useTheme } from "../../context/ThemeContext";
import { useModal } from "../../context/ModalsContext";

function EditUser() {
  const { theme } = useTheme();
  const { handleClickOpenSettings } = useModal();

  return (
    <div className="edit-user">
      <div className="container-edit-user">
        <div className="chart-edit-user">
          <img
            src={theme === "light" ? XPreto : XBranco}
            title="Sair"
            alt=""
            onClick={() => handleClickOpenSettings(false)}
          />
          <h3>Editar Usuário</h3>
          <ul>
            <li>Nome</li>
            <p>nome</p>
            <li>email</li>
            <p>email</p>
            <li>senha</li>
            <p>senha</p>
            <li>Tipo de cadastro</li>
            <p>Cliente</p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
