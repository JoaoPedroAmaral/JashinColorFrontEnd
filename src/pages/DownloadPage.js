import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ArrowNavButton from "../components/ArrowNavButton";

export default function DownloadPage() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col justify-start items-center gap-8 py-10 mt-[60px] m-auto">
        <div className="w-full flex px-8 items-center justify-evenly mt-20">
          <div>
            <h2 className="text-brandPink font-chango m-0 p-0 text-2xl">
              Pedido #ORD-001
            </h2>
            <p className="mt-2 text-mainText">
              Acesse e baixe seus desenhos em PDF
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
              <p className="my-2.5">Total de paginas</p>
              <h3 className="text-brandPink font-chango m-0 p-0 text-xl">15</h3>
            </div>
            <div className="text-2xl">🧾</div>
          </div>
          <div className="bg-white py-3 px-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex justify-between items-center w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)] cursor-default">
            <div className="my-3 text-start">
              <p className="my-2.5">preço do documento</p>
              <h3 className="text-brandPink font-chango m-0 p-0 text-xl">
                R$ 9,90
              </h3>
            </div>
            <div className="text-2xl">💰</div>
          </div>
          <div className="bg-white py-3 px-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex justify-between items-center w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)] cursor-default">
            <div className="my-3 text-start">
              <p className="my-2.5">status do documento</p>
              <h3 className="text-brandPink font-chango m-0 p-0 text-xl">
                Concluído
              </h3>
            </div>
            <div className="text-2xl">✅</div>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-12 max-w-[900px] w-full px-5 mx-auto">
          <div className="bg-white py-3 px-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex justify-between items-start w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)] cursor-default flex-col">
            <div className="text-start w-full">
              <div className="relative inline-block w-full">
                <span className="absolute top-2.5 right-2.5 z-10 px-3 py-1 rounded-full text-xs font-semibold bg-[#fddde6] text-[#f06292]">
                  Book
                </span>
                <img
                  src="/assets/image/jashiHeadIcon.png"
                  alt="Sample"
                  className="w-full rounded-lg block"
                />
              </div>
              <p className="font-bold mt-3 text-mainText">
                Desenho para Colorir - Paisagem
              </p>
              <p className="text-[#666] text-sm mt-1">
                2.4 MB • 03 de jan. de 2025
              </p>

              <div className="flex items-center gap-2 mt-4 w-full">
                <a
                  href="#download"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer no-underline transition-all duration-200 border-none font-sans bg-[#ffe033] text-[#222] hover:bg-brandYellow w-4/5"
                >
                  💹 Baixar PDF
                </a>
                <button className="flex items-center justify-center gap-2 p-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 font-sans border border-[#ddd] bg-white text-[#333] hover:bg-[#f5f5f5] w-1/10">
                  📃
                </button>
                <button className="flex items-center justify-center gap-2 p-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 font-sans border border-[#ddd] bg-white text-[#333] hover:bg-[#f5f5f5] w-1/10">
                  🔗
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white py-3 px-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex justify-between items-start w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)] cursor-default flex-col">
            <div className="text-start w-full">
              <div className="relative inline-block w-full">
                <span className="absolute top-2.5 right-2.5 z-10 px-3 py-1 rounded-full text-xs font-semibold bg-[#fddde6] text-[#f06292]">
                  Paginas
                </span>
                <img
                  src="/assets/image/jashiHeadIcon.png"
                  alt="Sample"
                  className="w-full rounded-lg block"
                />
              </div>
              <p className="font-bold mt-3 text-mainText">
                Desenho para Colorir - Paisagem
              </p>
              <p className="text-[#666] text-sm mt-1">
                2.4 MB • 03 de jan. de 2025
              </p>

              <div className="flex items-center gap-2 mt-4 w-full">
                <a
                  href="#download"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer no-underline transition-all duration-200 border-none font-sans bg-[#ffe033] text-[#222] hover:bg-brandYellow w-4/5"
                >
                  💹 Baixar PDF
                </a>
                <button className="flex items-center justify-center gap-2 p-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 font-sans border border-[#ddd] bg-white text-[#333] hover:bg-[#f5f5f5] w-1/10">
                  📃
                </button>
                <button className="flex items-center justify-center gap-2 p-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 font-sans border border-[#ddd] bg-white text-[#333] hover:bg-[#f5f5f5] w-1/10">
                  🔗
                </button>
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
