import ArrowNavButton from "../components/ArrowNavButton";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function InitialPage() {
  return (
    <>
      <NavBar />

      <div className="min-h-screen flex flex-col m-auto">
        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center text-center w-full bg-gradient-to-b from-mainBg to-secondaryBg py-[12rem]">
          <h1 className="text-brandPink font-chango m-0 p-0 text-[2rem]">
            Transforme Imagem em
          </h1>
          <div style={{ display: "flex" }}>
            <h1 className="colorashin text-[2rem]">
              <span>D</span>
              <span>E</span>
              <span>S</span>
              <span>E</span>
              <span>N</span>
              <span>H</span>
              <span>O</span>
              <span>S</span>
            </h1>
            <p>&nbsp;&nbsp;&nbsp;</p>
            <h1 className="colorashin text-[2rem]">
              <span>C</span>
              <span>O</span>
              <span>L</span>
              <span>O</span>
              <span>R</span>
              <span>I</span>
              <span>D</span>
              <span>O</span>
            </h1>
          </div>
          <p className="text-black text-[1.2rem] leading-relaxed w-2/3 mt-4">
            Crie desenhos únicos a partir das suas fotos. Perfeito para
            crianças, adultos e educadores. Baixe em PDF de alta qualidade.
          </p>

          <div className="flex gap-8 mt-8">
            <Link
              className="bg-brandPink text-white border-none py-3 px-6 rounded-md cursor-pointer text-base font-bold inline-block font-sans no-underline hover:bg-brandPinkDark"
              style={{ marginTop: "32px" }}
              to="/transform"
            >
              Experimentar Grátis
            </Link>
            <a
              className="bg-transparent text-mainText border-2 border-mainText py-3 px-6 rounded-md cursor-pointer text-base font-bold inline-block font-sans no-underline hover:bg-mainText hover:text-mainBg"
              style={{ marginTop: "32px" }}
              href="#ready"
            >
              Ver como funciona
            </a>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="bg-secondaryBg w-full p-8 flex flex-col justify-center items-center text-center py-[12em]">
          <h1 className="text-white text-[2rem] font-chango drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] m-0 p-0">
            Por que escolher Colorashin?
          </h1>
          <p className="mt-2 text-mainText">
            A maneira mais facil de criar desenho para colorir
          </p>
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.6)] transition-all duration-300 w-1/5 h-[250px] cursor-default hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)]">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#ff4081]/15 flex items-center justify-center text-2xl">
                ✨
              </div>
              <h3 className="text-lg mb-2 text-brandPink font-chango">
                Transformação Instantânea
              </h3>
              <p className="text-sm leading-relaxed text-[#333]">
                Tecnologia avançada que converte suas fotos em desenhos para
                colorir em segundos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.6)] transition-all duration-300 w-1/5 h-[250px] cursor-default hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)]">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#ff4081]/15 flex items-center justify-center text-2xl">
                📄
              </div>
              <h3 className="text-lg mb-2 text-brandPink font-chango">
                PDF de Alta Qualidade
              </h3>
              <p className="text-sm leading-relaxed text-[#333]">
                Baixe seus desenhos em PDF prontos para impressão com ótima
                resolução.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.6)] transition-all duration-300 w-1/5 h-[250px] cursor-default hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)]">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#ff4081]/15 flex items-center justify-center text-2xl">
                🕒
              </div>
              <h3 className="text-lg mb-2 text-brandPink font-chango">
                Histórico Completo
              </h3>
              <p className="text-sm leading-relaxed text-[#333]">
                Acesse todas as suas transformações sempre que quiser, em um só
                lugar.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.6)] transition-all duration-300 w-1/5 h-[250px] cursor-default hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)]">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#ff4081]/15 flex items-center justify-center text-2xl">
                🔒
              </div>
              <h3 className="text-lg mb-2 text-brandPink font-chango">
                Seguro e Privado
              </h3>
              <p className="text-sm leading-relaxed text-[#333]">
                Suas imagens são processadas com total segurança e privacidade.
              </p>
            </div>
          </div>
        </div>

        {/* How it Works Section */}
        <div className="py-20 px-5 text-center bg-gradient-to-b from-secondaryBg to-mainBg w-full py-[12em]">
          <h1 className="text-brandPink font-chango m-0 p-0 text-[2rem]">
            Como Funciona
          </h1>
          <p className="mt-2 text-mainText">
            Três passos simples para criar seus desenhos personalizados
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-12 max-w-[900px] mx-auto mt-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-[#ff4081]/15 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brandPink font-chango">
                  1
                </span>
              </div>
              <h3 className="text-xl mb-2 text-brandPink font-chango">
                Envie sua Imagem
              </h3>
              <p className="text-sm leading-relaxed text-[#255] max-w-[260px] mx-auto">
                Faça upload da imagem que deseja transformar em desenho.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-[#ff4081]/15 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brandPink font-chango">
                  2
                </span>
              </div>
              <h3 className="text-xl mb-2 text-brandPink font-chango">
                Transformação Mágica
              </h3>
              <p className="text-sm leading-relaxed text-[#255] max-w-[260px] mx-auto">
                Nossa IA converte sua foto em um lindo desenho para colorir.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-[#ff4081]/15 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brandPink font-chango">
                  3
                </span>
              </div>
              <h3 className="text-xl mb-2 text-brandPink font-chango">
                Baixe e Imprima
              </h3>
              <p className="text-sm leading-relaxed text-[#255] max-w-[260px] mx-auto">
                Baixe o PDF em alta qualidade e comece a colorir.
              </p>
            </div>
          </div>
        </div>

        {/* Ready Section */}
        <div
          className="flex flex-col items-center justify-center mt-4 py-[12em]"
          id="ready"
        >
          <h1 className="text-brandPink font-chango m-0 p-0 text-[2rem]">
            Pronto para começar?
          </h1>
          <Link
            className="bg-brandPink text-white border-none py-3 px-6 rounded-md cursor-pointer text-base font-bold inline-block font-sans no-underline hover:bg-brandPinkDark mt-8"
            to="/transform"
          >
            Experimentar Grátis
          </Link>
        </div>
      </div>

      <Footer />
      <ArrowNavButton />
    </>
  );
}
