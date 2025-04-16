import { useState } from "react";

function App() {
  const [code, setCode] = useState("");
  const [isCodeValid, setIsCodeValid] = useState(false);
  return (
    <main className="w-full flex flex-col">
      <div className="w-full flex flex-col items-center mt-10">
        <h1 className="text-center text-lg font-bold">Surprise Maker</h1>
        <span className="text-sm text-center">
          Você possui uma surpresa lhe aguardando dentro do guarda-roupas que
          está no quartinho (antigo escritório) que encontra-se trancado.
          <br />
          Para acessar você precisa encontrar a chave do quartinho, porém para
          saber onde a chave está você precisa encontrar o papel que contém o
          código que precisa ser inserido nesta aplicação para poder informar
          onde a chave está.
        </span>
      </div>
    </main>
  );
}

export default App;
