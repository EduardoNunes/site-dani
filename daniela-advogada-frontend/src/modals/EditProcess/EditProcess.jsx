import "./edit-process.css";
import XPreto from "../../assets/x-preto.png";
import XBranco from "../../assets/x-branco.png";
import { useTheme } from "../../context/ThemeContext";
import { useModal } from "../../context/ModalsContext";
import { useState } from "react";
import api from "../../services/api";
import { getItem } from "../../utils/storage";

function EditProcess() {
  const { theme } = useTheme();
  const { handleClickOpenEditProcess, selectedEditProcess } = useModal();
  const [autor, setAutor] = useState(selectedEditProcess.autor);
  const [reu, setReu] = useState(selectedEditProcess.reu);
  const [numero, setNumero] = useState(selectedEditProcess.numero);
  const [vara, setVara] = useState(selectedEditProcess.vara);
  const [juiz, setJuiz] = useState(selectedEditProcess.juiz);
  const [comarca, setComarca] = useState(selectedEditProcess.comarca);
  const [data_entrada, setData_Entrada] = useState(
    selectedEditProcess.data_entrada
  );
  const [atualizado, setAtualizado] = useState(selectedEditProcess.atualizado);
  const [infos, setInfos] = useState(selectedEditProcess.infos);
  const token = getItem("token");
  const id = selectedEditProcess.id;

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.put(
        `/editarProcessoEscritorio/${id}`,
        {
          autor,
          reu,
          numero,
          vara,
          juiz,
          comarca,
          data_entrada,
          atualizado,
          infos,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      handleClickOpenEditProcess(false);
      console.log("Processo atualizado com sucesso!", response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="edit-process">
      <div className="container-process">
        <div className="chart-process">
          <img
            src={theme === "light" ? XPreto : XBranco}
            title="Sair"
            alt=""
            onClick={() => handleClickOpenEditProcess(false)}
          />
          <h3>Editar Processo</h3>
          <form onSubmit={handleSubmit}>
            <label>Autor:</label>
            <input
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            ></input>
            <label>Reu:</label>
            <input value={reu} onChange={(e) => setReu(e.target.value)}></input>
            <label>Número do processo:</label>
            <input
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            ></input>
            <label>Vara:</label>
            <input
              value={vara}
              onChange={(e) => setVara(e.target.value)}
            ></input>
            <label>Juiz:</label>
            <input
              value={juiz}
              onChange={(e) => setJuiz(e.target.value)}
            ></input>
            <label>Comarca:</label>
            <input
              value={comarca}
              onChange={(e) => setComarca(e.target.value)}
            ></input>
            <label>Data de entrada:</label>
            <input
              value={data_entrada}
              onChange={(e) => setData_Entrada(e.target.value)}
            ></input>
            <label>Atualizado em:</label>
            <input
              value={atualizado}
              onChange={(e) => setAtualizado(e.target.value)}
            ></input>
            <label>Informações:</label>
            <textarea
              value={infos}
              onChange={(e) => setInfos(e.target.value)}
            ></textarea>

            <button>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProcess;
