import React from "react";
import Navbar from "../../components/Navbar";
import { buildInitCache } from "../../services";
import MainMemory from "../../components/MainMemory";

const Home = () => {

  const loadData = async () => {
    const data = await buildInitCache();
    console.log(data);
  }

  React.useEffect(() => {
    loadData();
  }, []);


  return (
    <div>
      <Navbar />
      <h1> Memória Cache </h1>
      <div>
        <label htmlFor="cache">
          Ler Conteúdo do endereço:
          <input
            id="cache"
            type="text"
            placeholder="Digite o conteúdo do cache"
          />
        </label>
        <div>
          <button>Ler</button>
        </div>
      </div>

      <div>
        <label htmlFor="cache">
          Escrever em endereço de memória:
          <input
            id="cache"
            type="text"
            placeholder="Digite o conteúdo do cache"
          />
        </label>
        <div>
          <button> Escrever </button>
        </div>
      </div>
      <MainMemory />
    </div>
  );
}

export default Home;