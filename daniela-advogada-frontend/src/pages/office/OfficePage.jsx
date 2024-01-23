import { useEffect, useState } from "react";
import lupa from "../../assets/lupa.png";
import MarmoreRoxo from "../../assets/marmore-preto-roxo.jpg";
import MarmoreBranco from "../../assets/textura-marmore.jpg";
import { useModal } from "../../context/ModalsContext";
import { useTheme } from "../../context/ThemeContext";
import ProcessDetails from "../../modals/ProcessDetails";
import api from "../../services/api";
import { getItem } from "../../utils/storage";
import "./office-page.css";

function OfficePage() {
  const { theme } = useTheme();
  const { handleOpenProcessDetails, openProcessDetails, selectedProcess } =
    useModal();
  const [dataProcess, setDataProcess] = useState();
  const [newDataProcess, setNewDataProcess] = useState();

  const token = getItem("token");

  async function clientProcess() {
    try {
      const response = await api.get("/processosEscritorio", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setDataProcess(response.data);
      setNewDataProcess(response.data);      
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    clientProcess();
  }, []);

  function setSearchAll(event) {
    const searchTerm = event.toLowerCase();

    if (dataProcess) {
      if (!searchTerm) {
        setDataProcess(newDataProcess);
      } else {
        let newDataFilter = newDataProcess.filter((data) => {
          const autor = data.autor ? data.autor.toLowerCase() : "";
          const reu = data.reu ? data.reu.toLowerCase() : "";
          const numero = data.numero ? data.numero.toLowerCase() : "";
          const vara = data.vara ? data.vara.toLowerCase() : "";
          const juiz = data.juiz ? data.juiz.toLowerCase() : "";
          const comarca = data.comarca ? data.comarca.toLowerCase() : "";
          const entrada = data.data_entrada ? data.data_entrada.toLowerCase() : "";
          const atualizado = data.atualizado
            ? data.atualizado.toLowerCase()
            : "";

          return (
            autor.includes(searchTerm) ||
            reu.includes(searchTerm) ||
            numero.includes(searchTerm) ||
            vara.includes(searchTerm) ||
            juiz.includes(searchTerm) ||
            comarca.includes(searchTerm) ||
            entrada.includes(searchTerm) ||
            atualizado.includes(searchTerm)
          );
        });
        setDataProcess(newDataFilter);
      }
    }
  }

  return (
    <div className={`office-page office-page-${theme}`}>
      {openProcessDetails && <ProcessDetails processo={selectedProcess} />}
      <img
        className={`background background-${theme}`}
        src={theme === "light" ? MarmoreBranco : MarmoreRoxo}
        alt={`Banner-${theme}`}
      />
      <div className="container">
        <div className="tool-bar">
          <div className="content">
            <div className="input">
              <input
                type="text"
                placeholder="Buscar"
                onChange={(event) => setSearchAll(event.target.value)}
              />
              <img src={lupa} alt="lupa" />
            </div>
          </div>
        </div>

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

export default OfficePage;
