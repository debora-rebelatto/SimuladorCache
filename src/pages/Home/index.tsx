import React from "react";
import { buildInitCache } from "../../services";

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
    </div>
  );
}

export default Home;