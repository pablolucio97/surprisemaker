import { useState } from "react";
import { BsGift } from "react-icons/bs";
import Button from "./components/Button";
import { TextInput } from "./components/TextInput";

function App() {
  const [code, setCode] = useState("");
  const [isCodeValid, setIsCodeValid] = useState(false);
  return (
    <main className="w-full flex flex-col p-4">
      <div className="flex items-center mt-10 mx-auto">
        <BsGift className="w-12 h-12 animate-bounce text-pink-500 mr-2" />
        <h1 className="text-center text-2xl font-bold">Surprise Maker</h1>
      </div>
      <div className="w-full flex flex-col items-center mt-4 bg-white rounded-lg border-[2px] border-pink-300 p-6 border-dashed">
        <span className="text-md text-center mt-2 text-gray-700">
          Você possui uma surpresa lhe aguardando dentro do guarda-roupas que
          está no quartinho (antigo escritório) que encontra-se trancado.
        </span>
        <span className="text-md text-center mt-2 text-gray-700">
          Para acessar você precisa encontrar a chave do quartinho, porém para
          saber onde a chave está você precisa encontrar o papel que contém o
          código que precisa ser inserido nesta aplicação para poder informar
          onde a chave está.
        </span>
      </div>
      <div className="w-full flex flex-col items-center mt-6">
        <h2 className="text-center text-lg font-bold">
          Dicas para encontrar o papel que contém o código
        </h2>
        <ul className="list-disc text-center list-inside mt-2 text-gray-700">
          <li>O papel-código não está no quarto.</li>
          <li>Objeto utilizado para exibir fotografias.</li>
          <li>Talvez seja necessário abrir algo.</li>
        </ul>
      </div>
      <div className="w-full flex flex-col items-center mt-4 max-w-[320px] mx-auto animate-pulse">
        <TextInput
          inputLabel="Informe o código"
          placeholder="Informe o código encontrado"
        />
      </div>
      <div className="w-full flex flex-col items-center mt-2 max-w-[320px] mx-auto">
        <Button title="Confirmar código" />
      </div>
    </main>
  );
}

export default App;
