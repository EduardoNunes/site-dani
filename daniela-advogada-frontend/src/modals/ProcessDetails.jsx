import "./process-details.css";
import XPreto from "../assets/x-preto.png";
import XBranco from "../assets/x-branco.png";
import { useTheme } from "../context/ThemeContext";
import { useModal } from "../context/ModalsContext";

function ProcessDetails({ processo }) {
  const { theme } = useTheme();
  const { handleOpenProcessDetails } = useModal();
  const {
    autor,
    reu,
    numeroProcesso,
    vara,
    juiz,
    comarca,
    dataEntrada,
    atualizado,
    info,
  } = processo;

  return (
    <div className="process-details">
      <div className="container-process">
        <div className="chart-process">
          <img
            src={theme === "light" ? XPreto : XBranco}
            title="Sair"
            onClick={() => handleOpenProcessDetails(false)}
          />
          <h3>Detalhes do processo</h3>
          <ul>
            <li>Autor:</li>
            <p>{autor}</p>
            <li>Reu:</li>
            <p>{reu}</p>
            <li>Número do processo:</li>
            <p>{numeroProcesso}</p>
            <li>Vara:</li>
            <p>{vara}</p>
            <li>Juiz:</li>
            <p>{juiz}</p>
            <li>Comarca:</li>
            <p>{comarca}</p>
            <li>Data de entrada:</li>
            <p>{dataEntrada}</p>
            <li>Atualizado em:</li>
            <p>{atualizado}</p>
            <li>Informações:</li>
            <p className="infos">{info}</p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProcessDetails;
