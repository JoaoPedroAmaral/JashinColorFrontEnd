import React from "react";

export default function LoginModal({
  isOpen,
  onClose,
  isLoginMode,
  setIsLoginMode,
}) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLoginMode ? "Login realizado!" : "Cadastro realizado!");
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 w-screen h-screen bg-black/60 z-[2000] opacity-0 transition-opacity duration-300 ${isOpen ? "flex opacity-100 items-center justify-center" : "hidden"}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-mainBg p-[30px] rounded-xl w-[90%] max-w-[400px] relative shadow-[0_10px_30px_rgba(0,0,0,0.3)] text-center transition-transform duration-300 transform scale-100">
        <button
          className="absolute top-2.5 right-3 bg-transparent border-none text-[28px] cursor-pointer text-mainText p-0 w-[30px] h-[30px] flex items-center justify-center transition-colors duration-300 hover:text-brandPink"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="font-chango text-brandPink m-0 p-0 mb-5 text-[28px]">
          {isLoginMode ? "Login" : "Cadastro"}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isLoginMode && (
            <input
              type="text"
              placeholder="Nome"
              required
              className="w-full p-3 mb-3 rounded-md border-2 border-[#ccc] font-sans text-sm focus:outline-none focus:border-brandPink"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 mb-3 rounded-md border-2 border-[#ccc] font-sans text-sm focus:outline-none focus:border-brandPink"
          />
          <input
            type="password"
            placeholder="Senha"
            required
            className="w-full p-3 mb-3 rounded-md border-2 border-[#ccc] font-sans text-sm focus:outline-none focus:border-brandPink"
          />
          <button
            type="submit"
            className="w-full bg-brandPink text-white border-none rounded-md p-3 font-sans font-bold text-base cursor-pointer transition-all duration-300 hover:bg-brandPinkDark hover:-translate-y-0.5"
          >
            {isLoginMode ? "Entrar" : "Criar Conta"}
          </button>
        </form>
        <p className="mt-[15px] text-sm font-sans">
          {isLoginMode ? "Não tem conta? " : "Já tem conta? "}
          <span
            onClick={() => setIsLoginMode(!isLoginMode)}
            className="text-brandPink cursor-pointer font-bold underline hover:text-brandPinkDark"
          >
            {isLoginMode ? "Registre-se" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
