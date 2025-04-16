import { useEffect, useState } from "react";
import { BsGift } from "react-icons/bs";
import { FaKey } from "react-icons/fa6";
import Button from "./components/Button";
import { TextInput } from "./components/TextInput";

function App() {
  const [code, setCode] = useState("");
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [notifyCodeIsWrong, setNotifyCodeIsWrong] = useState(false);

  const secretCode = "camilinda";

  const validateCode = () => {
    if (code.toLowerCase() === secretCode) {
      setIsCodeValid(true);
    } else {
      setIsCodeValid(false);
    }
  };

  useEffect(() => {
    if (code.length >= secretCode.length && code !== secretCode) {
      setNotifyCodeIsWrong(true);
    } else {
      setNotifyCodeIsWrong(false);
    }
  }, [code, isCodeValid]);

  return (
    <main className="w-full flex flex-col p-6">
      <div className="flex items-center mt-4 mx-auto">
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
      {isCodeValid ? (
        <div className="w-full flex flex-col items-center mt-10">
          <h2 className="text-center text-lg font-bold">
            Parabéns por encontrar o código!
          </h2>
          <span className="text-md text-center mt-2 text-gray-700">
            A chave se encontra no fundo da primeira gaveta do criado-mudo.
          </span>
          <FaKey className="w-16 h-16 animate-pulse text-orange-300 mt-6" />
        </div>
      ) : (
        <>
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
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div className="w-full max-w-[320px] flex flex-col items-center mt-2 mx-auto">
            <Button
              title="Confirmar código"
              onClick={validateCode}
              disabled={code.length < secretCode.length || notifyCodeIsWrong}
            />
          </div>
          {notifyCodeIsWrong && (
            <span className="text-md text-center mt-2 text-red-400">
              Código incorreto
            </span>
          )}
        </>
      )}
    </main>
  );
}

export default App;
