import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ArrowNavButton from "../components/ArrowNavButton";

export default function MyAccountPage() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col justify-start items-center gap-8 py-10 pt-[60px] m-auto">
        <div className="w-full flex px-8 items-center justify-evenly mt-40">
          <div>
            <h2 className="text-[#FF4081] font-chango m-0 p-0 text-2xl">
              emailTeste@dominio.com
            </h2>
            <p className="mt-2 text-mainText">
              Visualize e gerencie suas transformações
            </p>
          </div>
          <div>
            <Link to="/transform">
              <button
                className="bg-transparent text-mainText border-2 border-mainText py-2 px-4 rounded-md cursor-pointer font-bold font-sans hover:bg-mainText hover:text-mainBg text-base"
                id="logoutBtn"
              >
                Nova Requisição
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-12 max-w-[900px] w-full px-5 mx-auto">
          <div className="bg-white py-3 px-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex justify-between items-center w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)] cursor-default">
            <div className="my-3 text-start">
              <p className="my-2.5">Total de pedidos</p>
              <h3 className="text-brandPink font-chango m-0 p-0 text-xl">15</h3>
            </div>
            <div className="text-2xl">🧾</div>
          </div>
          <div className="bg-white py-3 px-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex justify-between items-center w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)] cursor-default">
            <div className="my-3 text-start">
              <p className="my-2.5">Concluídos</p>
              <h3 className="text-brandPink font-chango m-0 p-0 text-xl">15</h3>
            </div>
            <div className="text-2xl">✅</div>
          </div>
          <div className="bg-white py-3 px-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex justify-between items-center w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)] cursor-default">
            <div className="my-3 text-start">
              <p className="my-2.5">Em andamento</p>
              <h3 className="text-brandPink font-chango m-0 p-0 text-xl">0</h3>
            </div>
            <div className="text-2xl">⏳</div>
          </div>
        </div>

        <div className="w-[90%] max-w-[900px] mt-10">
          <h2 className="text-xl font-bold text-[#333] mb-5">
            Histórico de Pedidos
          </h2>

          <div className="flex flex-col gap-5 w-full">
            {/* Pedido 1 */}
            <div className="bg-white border border-[#e0e0e0] rounded-2xl p-5 flex flex-col sm:flex-row items-start gap-5 relative shadow-[0_2px_5px_rgba(0,0,0,0.02)] w-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3210/3210134.png"
                alt="Desenho"
                className="w-20 h-20 object-contain rounded-lg shrink-0"
              />
              <div className="flex-1 flex flex-col gap-2 w-full">
                <div className="flex justify-between items-center w-full">
                  <span className="text-base font-bold text-[#111]">
                    Pedido #ORD-001
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#fddde6] text-[#f06292]">
                    Concluído
                  </span>
                </div>
                <p className="text-sm text-[#666] m-0">Download Único</p>
                <div className="flex items-center gap-4 text-[13px] text-[#555] mb-1.5 font-sans">
                  <span>📅 03 de janeiro de 2025</span>
                  <span className="font-semibold text-[#333]">R$ 9,90</span>
                </div>
                <div className="flex items-center gap-2.5 mt-1.5 w-full">
                  <Link
                    to="/download"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer no-underline transition-all duration-200 border-none font-sans bg-[#ffe033] text-[#222] hover:bg-brandYellow"
                  >
                    💹 Baixar PDF
                  </Link>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 font-sans border border-[#ddd] bg-white text-[#333] hover:bg-[#f5f5f5]">
                    👁 Visualizar
                  </button>
                </div>
              </div>
            </div>

            {/* Pedido 2 */}
            <div className="bg-white border border-[#e0e0e0] rounded-2xl p-5 flex flex-col sm:flex-row items-start gap-5 relative shadow-[0_2px_5px_rgba(0,0,0,0.02)] w-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3210/3210134.png"
                alt="Desenho"
                className="w-20 h-20 object-contain rounded-lg shrink-0"
              />
              <div className="flex-1 flex flex-col gap-2 w-full">
                <div className="flex justify-between items-center w-full">
                  <span className="text-base font-bold text-[#111]">
                    Pedido #ORD-002
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#fddde6] text-[#f06292]">
                    Concluído
                  </span>
                </div>
                <p className="text-sm text-[#666] m-0">Pacote 5 Desenhos</p>
                <div className="flex items-center gap-4 text-[13px] text-[#555] mb-1.5 font-sans">
                  <span>📅 03 de janeiro de 2025</span>
                  <span className="font-semibold text-[#333]">R$ 29,90</span>
                </div>
                <div className="flex items-center gap-2.5 mt-1.5 w-full">
                  <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer no-underline transition-all duration-200 border-none font-sans bg-[#ffe033] text-[#222] hover:bg-brandYellow">
                    💹 Baixar PDF
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 font-sans border border-[#ddd] bg-white text-[#333] hover:bg-[#f5f5f5]">
                    👁 Visualizar
                  </button>
                </div>
              </div>
            </div>

            {/* Pedido 3 */}
            <div className="bg-white border border-[#e0e0e0] rounded-2xl p-5 flex flex-col sm:flex-row items-start gap-5 relative shadow-[0_2px_5px_rgba(0,0,0,0.02)] w-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3210/3210134.png"
                alt="Desenho"
                className="w-20 h-20 object-contain rounded-lg shrink-0"
              />
              <div className="flex-1 flex flex-col gap-2 w-full">
                <div className="flex justify-between items-center w-full">
                  <span className="text-base font-bold text-[#111]">
                    Pedido #ORD-003
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#fff9c4] text-[#fbc02d]">
                    Processando
                  </span>
                </div>
                <p className="text-sm text-[#666] m-0">Download Único</p>
                <div className="flex items-center gap-4 text-[13px] text-[#555] mb-1.5 font-sans">
                  <span>📅 03 de janeiro de 2025</span>
                  <span className="font-semibold text-[#333]">R$ 9,90</span>
                </div>
                <div className="flex items-center gap-2.5 mt-1.5 w-full">
                  <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-[#777] transition-all duration-200 border-none font-sans bg-[#fff176] cursor-not-allowed opacity-60">
                    Processando...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ArrowNavButton />
    </>
  );
}
