import { useState } from "react";
import MarmoreRoxo from "../../assets/marmore-preto-roxo.jpg";
import MarmoreBranco from "../../assets/textura-marmore.jpg";
import { useTheme } from "../../context/ThemeContext";
import ProcessDetails from "../../modals/ProcessDetails";
import "./client-page.css";
import { useModal } from "../../context/ModalsContext";
import { useEffect } from "react";
import api from "../../services/api";
import { getItem } from "../../utils/storage";

function ClientPage() {
  const { theme } = useTheme();
  const { handleOpenProcessDetails, openProcessDetails, selectedProcess } =
    useModal();
  const [dataProcess, setDataProcess] = useState();

  const token = getItem("token");

  async function clientProcess() {
    try {
      const response = await api.get("/processosClientes", {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      setDataProcess(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    clientProcess();
  }, []);

  return (
    <div className={`client-page client-page-${theme}`}>
      {openProcessDetails && <ProcessDetails processo={selectedProcess} />}
      <img
        className={`background background-${theme}`}
        src={theme === "light" ? MarmoreBranco : MarmoreRoxo}
        alt={`Banner-${theme}`}
      />
      <div className="container">
        <div className="table">
          <div className="content">
            <div className="title">
              <ul>
                <li>Autor:</li>
                <li>Réu:</li>
                <li>Nº do processo:</li>
                <li>Vara:</li>
                <li>Data de entrada</li>
                <li>Movimentação:</li>
              </ul>
            </div>
            <div className="body">
              {dataProcess && dataProcess.length === 0 ? (
                <span>Não encontramos processos para esta conta</span>
              ) : (
                dataProcess &&
                dataProcess.map((processo, index) => (
                  <div
                    key={index}
                    className="line"
                    onClick={() => handleOpenProcessDetails(true, processo)}
                  >
                    <p title={processo.autor}>{processo.autor}</p>
                    <p title={processo.reu}>{processo.reu}</p>
                    <p title={processo.numero}>{processo.numero}</p>
                    <p title={processo.vara}>{processo.vara}</p>
                    <p title={processo.data_entrada}>{processo.data_entrada}</p>
                    <p title={processo.atualizado}>{processo.atualizado}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientPage;
