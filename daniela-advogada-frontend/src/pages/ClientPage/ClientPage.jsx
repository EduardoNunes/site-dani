import { useState } from "react";
import MarmoreRoxo from "../../assets/marmore-preto-roxo.jpg";
import MarmoreBranco from "../../assets/textura-marmore.jpg";
import processos from "../../banco-de-dados/processos";
import { useTheme } from "../../context/ThemeContext";
import ProcessDetails from "../../modals/ProcessDetails";
import "./client-page.css";
import { useModal } from "../../context/ModalsContext";

function ClientPage() {
  const { theme } = useTheme();
  const { handleOpenProcessDetails, openProcessDetails, selectedProcess } =
    useModal();

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
              {processos.map((processo, index) => (
                <div
                  key={index}
                  className="line"
                  onClick={() => handleOpenProcessDetails(true, processo)}
                >
                  <p title={processo.autor}>{processo.autor}</p>
                  <p title={processo.reu}>{processo.reu}</p>
                  <p title={processo.numeroProcesso}>
                    {processo.numeroProcesso}
                  </p>
                  <p title={processo.vara}>{processo.vara}</p>
                  <p title={processo.dataEntrada}>{processo.dataEntrada}</p>
                  <p title={processo.atualizado}>{processo.atualizado}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientPage;
